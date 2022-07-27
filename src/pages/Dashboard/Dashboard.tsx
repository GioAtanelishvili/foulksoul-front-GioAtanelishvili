import { Outlet } from 'react-router-dom';

import { Nav, DashboardCard } from './components';
import { Layout } from 'components';

const Dashboard: React.FC = () => {
  return (
    <Layout className='flex items-center py-24'>
      <Nav />
      <DashboardCard>
        <Outlet />
      </DashboardCard>
    </Layout>
  );
};

export default Dashboard;
