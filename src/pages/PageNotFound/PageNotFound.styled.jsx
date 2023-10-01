import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
`;

export const StyledLinkHome = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  margin-left: 15px;

  color: ${props => props.theme.colors.accent};

  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover,
  :focus {
    background: ${props => props.theme.colors.gradientOrange};
    color: ${props => props.theme.colors.white};
  }
`;
export const StyledHomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  margin-left: 10px;

  background: ${props => props.theme.colors.gradientOrange};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;
