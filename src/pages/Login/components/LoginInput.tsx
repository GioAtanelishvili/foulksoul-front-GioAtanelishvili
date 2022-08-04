import { LoginInputProps } from './types';

const LoginInput: React.FC<LoginInputProps> = (props) => {
  const handleChange = (e: React.SyntheticEvent) => {
    props.register.onChange(e);

    if (props.clearError) {
      props.clearError('password');
    }
  };

  return (
    <div className='w-3/4 mt-11 relative text-sm'>
      <input
        id={props.id}
        name={props.register.name}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
        onChange={handleChange}
        className='bg-login-input-background w-full mb-1 py-4 pl-5 rounded-[2px] outline-none text-login-input-text placeholder:text-login-input-text'
      />
      {props.error && (
        <p className='text-input-error absolute font-medium'>
          {props.error.message}
        </p>
      )}
    </div>
  );
};

export default LoginInput;
