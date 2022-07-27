import { Routes, Route } from 'react-router-dom';

import { Landing } from 'pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
  );
};

export default App;
