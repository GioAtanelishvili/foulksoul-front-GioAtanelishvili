import { ModalCloseIcon } from './svgs';
import { ModalCardProps } from 'types';

const ModalCard: React.FC<ModalCardProps> = (props) => {
  return (
    <article
      className='bg-content-white w-1/3 m-auto px-5 flex flex-col items-center relative rounded-lg z-20'
      data-testid='modal-card'
    >
      <button
        className='absolute top-4 right-3'
        onClick={props.handleClose}
        data-testid='modal-close-button'
      >
        <ModalCloseIcon />
      </button>
      {props.children}
    </article>
  );
};

export default ModalCard;
