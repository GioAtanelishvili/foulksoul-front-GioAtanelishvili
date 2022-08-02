import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from 'context';
import { WrapperProps } from 'types';

const LogoutButton: React.FC<WrapperProps> = (props) => {
  const { handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate('/');
        handleLogout();
      }}
      className='flex items-center my-3 py-2 pl-7 text-lg font-nino-mtavruli bg-transparent text-content-white active:bg-content-white active:text-primary-dark-blue '
      data-testid='logout-button'
    >
      {props.children}
    </button>
  );
};

export default LogoutButton;
