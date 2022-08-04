const LoginSubmitButton: React.FC = () => {
  return (
    <button
      type='submit'
      className='bg-login-submit-button w-3/5 mt-11 py-4 text-base text-white font-nino-mtavruli tracking-[0.12em] border border-white rounded-[3px]'
      data-test-id='login-submit-button'
    >
      შემობრძანდი
    </button>
  );
};

export default LoginSubmitButton;
