import React, { useEffect } from 'react';

import { Global } from 'styles/Global';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import PageContacts from 'pages/PageContacts/PageContacts';

import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/auth/selectors';
import { refreshThunk } from 'redux/auth/operations';

import { Loader } from './Loader/Loader';
import ScrollToTop from 'react-scroll-up';
import { StyledUpSpan } from './ContactList/ContactList.styled';

const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
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
      <ScrollToTop
        showUnder={10}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          background:
            'linear-gradient(141.22deg,  #344b6b 9.4%, #458aa5 91.91%)',
          width: '50px',
          height: '50px',
          padding: '8px',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <StyledUpSpan>&#8593;</StyledUpSpan>
      </ScrollToTop>
      <Global />
    </>
  );
};

export default App;
