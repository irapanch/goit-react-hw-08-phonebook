import { styled } from 'styled-components';

export const StyledTitle = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;
export const StyledDesc = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: ${props => props.theme.shadows.boxShadowForm};
  width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.colors.cardBackground};

  padding: 20px;
`;
