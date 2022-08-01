import { Layout } from 'components';

const AuthError: React.FC = () => {
  return (
    <Layout className='flex justify-center items-center'>
      <h1 className='text-content-white text-7xl text-center font-sans'>
        403 - Unauthorized :(
      </h1>
    </Layout>
  );
};

export default AuthError;
