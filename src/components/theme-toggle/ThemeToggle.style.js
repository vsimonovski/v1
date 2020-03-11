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
    //transform: rotate(-25deg);
    //transition: all 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
