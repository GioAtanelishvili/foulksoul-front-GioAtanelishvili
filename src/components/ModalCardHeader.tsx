import { WrapperProps } from 'types';

const ModalCardHeader: React.FC<WrapperProps> = (props) => {
  return (
    <header className='w-[85%] mt-16 pb-1 text-center text-lg font-nino-mtavruli border-b border-b-black'>
      {props.children}
    </header>
  );
};

export default ModalCardHeader;
