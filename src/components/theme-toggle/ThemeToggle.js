import React, { Fragment } from 'react';
import { ToggleContainer, ToggleIcon } from './ThemeToggle.style';
import { ACTIVE_THEME } from '../../theme';

function ThemeToggle({ changeTheme, theme }) {
  return (
    <Fragment>
      <ToggleContainer>
        {theme.NAME === ACTIVE_THEME.DARK && (
          <ToggleIcon onClick={changeTheme} className="gg-sun" />
        )}

        {theme.NAME === ACTIVE_THEME.LIGHT && (
          <ToggleIcon onClick={changeTheme} className="gg-moon" />
        )}
      </ToggleContainer>
    </Fragment>
  );
}

export default ThemeToggle;
