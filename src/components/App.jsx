import React from 'react';
// import { lazy } from 'react';
import { Global } from 'styles/Global';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import PageContacts from 'pages/PageContacts/PageContacts';
import { PrivateRoute } from './Routes/PrivateRoute';

// const Home = lazy(() => import('pages/Home/Home'));
// const Layout = lazy(() => import('components/Layout/Layout'));
// const Login = lazy(() => import('pages/Login/Login'));
// const Register = lazy(() => import('pages/Register/Register'));
// const PageContacts = lazy(() => import('pages/PageContacts/PageContacts'));
// const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <PageContacts />
              </PrivateRoute>
            }
          />

          <Route path="index.html" element={<Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      {/* <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      /> */}
      {/* <ScrollToTop
        showUnder={120}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          background:
            'linear-gradient(141.22deg,  #6a6b38 9.4%, #9cb640 91.91%)',
          width: '42px',
          height: '42px',
          padding: '8px',
          borderRadius: '50%',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <StyledUpSpan>&#8593;</StyledUpSpan>
      </ScrollToTop> */}

      <Global />
    </>
  );
};

export default App;
