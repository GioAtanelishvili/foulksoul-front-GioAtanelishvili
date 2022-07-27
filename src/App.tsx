import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider, DataContextProvider } from 'context';
import { Landing } from 'pages';

const App = () => {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default App;
