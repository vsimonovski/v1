import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.titleTextColor};
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 0 15%;
  overflow: hidden;
`;

export const ContentInner = styled.div`
  margin: auto 0;
`;
