import { styled } from 'styled-components';
export const StyledForm = styled.form`
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
export const StyledBtn = styled.button`
  width: 200px;
  background-color: ${props => props.theme.colors.background};

  margin-top: 20px;
`;
