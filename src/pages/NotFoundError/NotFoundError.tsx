import { Layout } from 'components';

const NotFoundError: React.FC = () => {
  return (
    <Layout className='flex justify-center items-center'>
      <h1 className='text-content-white text-7xl text-center font-sans'>
        404 - Not Found :(
      </h1>
    </Layout>
  );
};

export default NotFoundError;
