import { TextAreaProps } from 'types';

const MemberTextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <div
      className={`w-1/2 h-56 mt-11 mb-1 py-3 pl-2 pr-3 relative text-sm border rounded-[5px] ${
        props.error ? 'border-input-error' : 'border-primary-dark-blue'
      }`}
    >
      <textarea
        id='members-update-textarea'
        name={props.register.name}
        placeholder='ბექა, ბასზე ბასი ადამიანი...'
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
        className='w-full min-h-full resize-none rounded-[5px] outline-none text-primary-dark-blue placeholder:text-update-form-placeholder'
      />
      {props.error && (
        <p className='text-input-error w-full text-center absolute -bottom-6 font-medium'>
          {props.error.message}
        </p>
      )}
    </div>
  );
};

export default MemberTextArea;
