import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoginInput, LoginSubmitButton } from '../components';
import { LoadingSpinner } from 'components';
import { AuthContext } from 'context';
import { LoginFormData } from 'types';
import { login } from 'services';

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginFormData>({ mode: 'onSubmit' });

  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext);

  const submitHandler = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const response = await login(data);
      const { status } = response;

      setIsLoading(false);

      if (status === 200) {
        const { token } = response.data;

        handleLogin(token);
        navigate('/band');
      }
    } catch (err: any) {
      setIsLoading(false);

      const { status } = err.response;
      if (status === 422) {
        const message = 'შეყვანილი მონაცემები არასწორია!';

        setError('nickname', { message }, { shouldFocus: true });
        setError('password', { message });
      } else if (status === 500) {
        navigate('/500');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='w-full flex flex-col items-center'
      data-testid='login-form'
    >
      <LoginInput
        id='nickname'
        type='text'
        placeholder='მეტსახელი'
        register={register('nickname', {
          required: 'მეტსახელის ველი სავალდებულოა!',
          minLength: {
            value: 3,
            message: 'უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან!',
          },
          pattern: {
            value: /^[a-z0-9]+$/,
            message:
              'უნდა შედგებოდეს დაბალი რეგისტრის სიმბოლოებისა და რიცხვებისგან!',
          },
        })}
        error={errors['nickname']}
      />
      <LoginInput
        id='password'
        type='password'
        placeholder='პაროლი'
        register={register('password', {
          required: 'პაროლის ველი სავალდებულოა!',
          minLength: {
            value: 3,
            message: 'უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან!',
          },
        })}
        error={errors['password']}
      />
      <LoginSubmitButton />
      {isLoading && (
        <LoadingSpinner className='fixed scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
      )}
    </form>
  );
};

export default LoginForm;