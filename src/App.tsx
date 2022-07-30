import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContextProvider, DataContextProvider } from 'context';
import {
  Landing,
  Login,
  Dashboard,
  Main,
  Members,
  MembersEdit,
  MemberCreate,
  SocialMedia,
} from 'pages';

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
            <Route path='members' element={<Members />} />
            <Route path='members/edit' element={<MembersEdit />} />
            <Route path='members/create' element={<MemberCreate />} />
            <Route path='social-media' element={<SocialMedia />} />
            <Route
              path='social-media/edit'
              element={<p>edit social media</p>}
            />
            <Route
              path='social-media/create'
              element={<p>create social media</p>}
            />
            <Route path='about' element={<p>about</p>} />
          </Route>
        </Routes>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default App;
