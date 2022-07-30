import { WrapperProps } from 'types';

const UpdateFormButton: React.FC<WrapperProps> = (props) => {
  return (
    <button
      type='submit'
      className={`bg-primary-dark-blue text-content-white mt-12 pt-4 pb-3 px-8 rounded-[5px] text-center text-sm font-bold font-nino-mtavruli ${props.className}`}
      data-testid='members-update-form-submit-button'
    >
      {props.children}
    </button>
  );
};

export default UpdateFormButton;
