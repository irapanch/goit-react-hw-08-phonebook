import { styled } from 'styled-components';

export const StyledContactLi = styled.li`
  list-style: none;

  margin-top: 10px;
  display: flex;
  text-align: center;
`;

export const StyledSpan = styled.span`
  margin-right: auto;
`;
export const StyledBtnDelete = styled.button`
  width: 70px;
  padding: 4px 0;
  background-color: ${props => props.theme.colors.btnDelete};
`;
