import { Routes, Route } from 'react-router-dom';

import { DataContextProvider } from 'context';
import { Landing } from 'pages';

const App = () => {
  return (
    <DataContextProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </DataContextProvider>
  );
};

export default App;
