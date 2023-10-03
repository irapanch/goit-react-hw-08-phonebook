import React from 'react';

// const Layout = () => {
//   return <div>Layout</div>;
// };

// export default Layout;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledLink,
} from './Layout.styled';
import { LiaPhoneSquareSolid } from 'react-icons/lia';
import { Loader } from '../Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
// import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo to="/">
          <LiaPhoneSquareSolid size="38" />
        </StyledLogo>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn ? (
            <>
              <StyledLink to="/contacts">Contacts</StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink to="/login">Log in</StyledLink>
              <StyledLink to="/register">Sign up</StyledLink>
            </>
          )}
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default Layout;
