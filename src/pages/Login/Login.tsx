import { Layout } from 'components';
import { LoginCard, LoginForm } from './components';

const Login: React.FC = () => {
  return (
    <Layout className='flex justify-center items-center'>
      <LoginCard>
        <header className='text-black w-full pt-5 pb-5 text-center text-lg font-bold font-nino-mtavruli bg-login-header bg-no-repeat bg-center'>
          კარიბჭე
        </header>
        <LoginForm />
      </LoginCard>
    </Layout>
  );
};

export default Login;
