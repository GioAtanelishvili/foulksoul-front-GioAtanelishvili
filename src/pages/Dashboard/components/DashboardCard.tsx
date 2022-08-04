import { WrapperProps } from 'types';

const DashboardCard: React.FC<WrapperProps> = (props) => {
  return (
    <main
      className='bg-content-white w-[68%] h-full ml-35 mr-40 flex flex-col items-center relative rounded-[20px] shadow-dashboard-card'
      data-test-id='dashboard-card'
    >
      {props.children}
    </main>
  );
};

export default DashboardCard;
