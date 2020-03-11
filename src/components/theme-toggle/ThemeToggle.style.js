import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: relative;
`;

export const ToggleIcon = styled.i`
  position: absolute;
  right: 15px;
  top: 15px;
  color: ${props => props.theme.textHighlight};

  &:hover {
    cursor: pointer;
  }
`;
