import { Outlet } from 'react-router-dom';

import { Layout } from 'components';
import { Nav } from './components';

const Dashboard: React.FC = () => {
  return (
    <Layout className='flex items-center'>
      <Nav />
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
