import { useForm } from 'react-hook-form';

import { LoginInput, LoginSubmitButton } from '../components';

const LoginForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  return (
    <form className='w-full flex flex-col items-center'>
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
    </form>
  );
};

export default LoginForm;
