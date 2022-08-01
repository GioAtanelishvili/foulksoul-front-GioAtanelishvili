import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContextProvider, DataContextProvider } from 'context';
import {
  SocialMediaCreate,
  SocialMediaEdit,
  InternalError,
  NotFoundError,
  MemberCreate,
  MembersEdit,
  SocialMedia,
  Dashboard,
  AuthError,
  BandEdit,
  Landing,
  Members,
  Login,
  Main,
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
            <Route path='about/edit' element={<BandEdit />} />
          </Route>
          <Route path='403' element={<AuthError />} />
          <Route path='500' element={<InternalError />} />
          <Route path='*' element={<NotFoundError />} />
        </Routes>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default App;
