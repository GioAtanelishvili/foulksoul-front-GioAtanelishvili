import { createContext, useState, useEffect, useCallback } from 'react';

import { WrapperProps } from 'types';

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  handleLogin: (_: string) => {},
  handleLogout: () => {},
});

export const AuthContextProvider: React.FC<WrapperProps> = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('token'))
  );

  let timerId: NodeJS.Timeout | undefined;

  const handleLogin = (token: string) => {
    setToken(token);
    setIsLoggedIn(true);

    const loginTime = Number(localStorage.getItem('loginTime')) || Date.now();
    const logoutTime =
      Number(localStorage.getItem('logoutTime')) || Date.now() + 3.6e6;

    timerId = setTimeout(handleLogout, logoutTime - loginTime);

    localStorage.setItem('token', token);
    localStorage.setItem('loginTime', loginTime.toString());
    localStorage.setItem('logoutTime', logoutTime.toString());
  };

  const handleLogout = useCallback(() => {
    setToken('');
    setIsLoggedIn(false);

    clearTimeout(timerId);

    localStorage.clear();
  }, [timerId]);

  useEffect(() => {
    const logoutTime = Number(localStorage.getItem('logoutTime'));

    let timerId: NodeJS.Timeout;

    if (logoutTime - Date.now() < 3e5) {
      handleLogout();
    } else {
      timerId = setTimeout(handleLogout, logoutTime - Date.now());
    }

    return () => clearTimeout(timerId);
  }, [handleLogout]);

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn, handleLogin, handleLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
