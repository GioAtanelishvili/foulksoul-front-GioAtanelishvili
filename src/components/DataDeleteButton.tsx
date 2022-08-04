import { DataDeleteButtonProps } from './types';

const DataDeleteButton: React.FC<DataDeleteButtonProps> = (props) => {
  return (
    <button
      className='bg-delete-modal-button text-white mt-20 mb-10 pt-3 pb-2 px-10 font-medium font-nino-mtavruli rounded-[5px]'
      onClick={props.handleClick}
      data-test-id='data-delete-button'
    >
      წაშლა
    </button>
  );
};

export default DataDeleteButton;
