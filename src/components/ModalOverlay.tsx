import { ModalOverlayProps } from './types';

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
    <div
      onClick={props.handleClick}
      className='bg-modal-overlay w-full fixed top-0 bottom-0 opacity-[0.97] z-10'
      data-test-id='modal-overlay'
    />
  );
};

export default ModalOverlay;
