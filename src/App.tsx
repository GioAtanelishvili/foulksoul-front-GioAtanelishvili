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
  SocialMediaCreate,
  SocialMediaEdit,
  Band,
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
            <Route path='social-media/edit' element={<SocialMediaEdit />} />
            <Route path='social-media/create' element={<SocialMediaCreate />} />
            <Route path='about' element={<Band />} />
          </Route>
        </Routes>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default App;
