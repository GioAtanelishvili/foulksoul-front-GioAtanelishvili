import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContextProvider, DataContextProvider } from 'context';
import { Landing, Login, Dashboard, Main } from 'pages';

const App = () => {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route path='band' element={<Dashboard />}>
            <Route index element={<Navigate to='main' />} />
            <Route path='main' element={<Main />} />
            <Route path='members' element={<p>members</p>} />
            <Route path='social-media' element={<p>social media</p>} />
            <Route path='about' element={<p>about</p>} />
          </Route>
        </Routes>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default App;
