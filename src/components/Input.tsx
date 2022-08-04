import { InputProps } from 'types';

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className='flex justify-center relative text-sm'>
      <input
        id={props.id}
        name={props.register.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
        className={`w-40 h-14 py-4 text-center border rounded-[5px] outline-none text-primary-dark-blue placeholder:text-update-form-placeholder ${
          props.error ? 'border-input-error' : 'border-primary-dark-blue'
        } ${props.className}`}
      />
      {props.error && (
        <p
          className='text-input-error absolute top-14 text-center font-medium'
          data-test-id={`${props.id}-error-message`}
        >
          {props.error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
