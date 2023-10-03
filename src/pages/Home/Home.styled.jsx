import { styled } from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 90vh;
  background: url('https://cdn.pixabay.com/photo/2015/09/05/20/58/smartphone-925287_640.jpg')
    center/cover no-repeat;
`;

export const StyledHeading = styled.h1`
  padding-right: 15px;
  text-align: end;
  color: ${props => props.theme.colors.white};
`;
export const StyledText = styled.h3`
  padding-right: 15px;
  display: block;
  max-width: 500px;
  text-align: end;
  color: ${props => props.theme.colors.text};
`;
