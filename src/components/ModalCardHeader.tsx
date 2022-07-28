import { WrapperProps } from 'types';

const ModalCardHeader: React.FC<WrapperProps> = (props) => {
  return (
    <header className='w-[85%] mt-16 pb-1 text-center text-lg font-nino-mtavruli border-b border-b-black'>
      <h1 data-testid='modal-card-header'>{props.children}</h1>
    </header>
  );
};

export default ModalCardHeader;
