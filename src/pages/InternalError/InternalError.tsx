import { Layout } from 'components';

const InternalError: React.FC = () => {
  return (
    <Layout className='flex justify-center items-center'>
      <h1 className='text-content-white text-7xl text-center font-sans'>
        500 - Internal Error :(
      </h1>
    </Layout>
  );
};

export default InternalError;
