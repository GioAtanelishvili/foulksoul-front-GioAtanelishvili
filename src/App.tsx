import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider, DataContextProvider } from 'context';
import { Landing, Login } from 'pages';

const App = () => {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default App;
