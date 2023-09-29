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
import { LuClapperboard } from 'react-icons/lu';
import { Loader } from '../../components/Loader/Loader';

const Layout = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo to="/">
          <LuClapperboard size="38" />
        </StyledLogo>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
          <StyledLink to="/register">Sign in</StyledLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default Layout;
