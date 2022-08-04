import { ModalCardProps } from './types';
import { ModalCloseIcon } from './svgs';

const ModalCard: React.FC<ModalCardProps> = (props) => {
  return (
    <article
      className='bg-content-white w-1/3 m-auto px-5 flex flex-col items-center relative rounded-lg z-20'
      data-test-id='modal-card'
    >
      <button
        className='absolute top-4 right-3'
        onClick={props.handleClose}
        data-test-id='modal-close-button'
      >
        <ModalCloseIcon />
      </button>
      {props.children}
    </article>
  );
};

export default ModalCard;
