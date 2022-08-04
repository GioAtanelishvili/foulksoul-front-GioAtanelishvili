import { WrapperProps } from 'types';

const DashboardHeader: React.FC<WrapperProps> = (props) => {
  return (
    <header className='w-3/4 mt-11 py-3 text-center text-ls font-nino-mtavruli border-b border-b-black'>
      <h1 data-test-id='dashboard-header'>{props.children}</h1>
    </header>
  );
};

export default DashboardHeader;
