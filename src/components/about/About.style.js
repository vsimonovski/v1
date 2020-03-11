import styled from 'styled-components';

export const AboutSection = styled.section`
  color: ${props => props.theme.textColor};
  padding: 25px 0;
  font-size: 1.5rem;
  line-height: 2.3rem;
  max-width: 500px;
`;

export const Tooltip = styled.span`
  cursor: pointer;
  color: ${props => props.theme.textHighlight};
`;
