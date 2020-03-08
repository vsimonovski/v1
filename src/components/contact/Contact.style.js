import styled from 'styled-components';

export const ContactSection = styled.section`
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const ContactItem = styled.div`
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Emoji = styled.span`
  font-size: 2rem;
  padding: 0;
`;

export const ContactLink = styled.a`
  cursor: pointer;
  color: ${props => props.theme.textHighlight};
  font-size: 1.4rem;
  margin-left: 1.2rem;
  border-bottom: 0 solid transparent;
  transition: border 0.2s ease-in;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.textHighlight};
  }
`;
