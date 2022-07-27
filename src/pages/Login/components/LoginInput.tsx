import { InputProps } from 'types';

const LoginInput: React.FC<InputProps> = (props) => {
  return (
    <div className='w-3/4 mt-11 relative text-sm'>
      <input
        id={props.id}
        name={props.register.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
        className='bg-login-input-background w-full mb-1 py-4 pl-5 rounded-[2px] outline-none text-login-input-text placeholder:text-login-input-text'
      />
      {props.error && (
        <p className='text-login-input-error font-medium'>
          {props.error.message}
        </p>
      )}
    </div>
  );
};

export default LoginInput;
