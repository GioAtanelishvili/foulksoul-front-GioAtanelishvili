import { WrapperProps } from 'types';

const LoginCard: React.FC<WrapperProps> = (props) => {
  return (
    <main className='w-1/5 pt-11 pb-14 flex flex-col items-center justify-center border border-white bg-gradient-to-b from-login-gradient-start to-login-gradient-end'>
      {props.children}
    </main>
  );
};

export default LoginCard;
