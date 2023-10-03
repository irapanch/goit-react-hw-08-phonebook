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
export const StyledUpSpan = styled.span`
  font-size: 36px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.bold};
    transform: scale(1.05);
  }
`;
