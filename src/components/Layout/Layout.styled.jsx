// import { styled } from 'styled-components';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.main`
  margin: 0 auto;
  padding: 0 16px;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 76px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.boxShadowHeader};
  margin-left: -16px;
  margin-right: -16px;

  > nav {
    display: flex;
  }
`;

export const StyledLogo = styled(NavLink)`
  width: 50px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  margin: 0;
  padding-top: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
  &.active {
    background: ${props => props.theme.colors.gradientOrange};
    box-shadow: 0 0 15px #2a2a2a;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 11px 16px;

  text-decoration: underline;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 15px #2a2a2a;
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.gradientOrange};
    box-shadow: 0 0 15px #2a2a2a;
  }
`;
