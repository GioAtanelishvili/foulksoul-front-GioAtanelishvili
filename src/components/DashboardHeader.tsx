import { WrapperProps } from 'types';

const DashboardHeader: React.FC<WrapperProps> = (props) => {
  return (
    <header className='w-3/4 mt-11 py-3 text-center text-ls font-nino-mtavruli border-b border-b-black'>
      {props.children}
    </header>
  );
};

export default DashboardHeader;
