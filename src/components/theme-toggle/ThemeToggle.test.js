import React from 'react';
import { render } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import { darkTheme, lightTheme } from '../../theme';

const onThemeChange = jest.fn();

it('should match snapshot', () => {
  const tree = render(
    <ThemeToggle changeTheme={onThemeChange} theme={darkTheme} />
  );
  expect(tree).toMatchSnapshot();
});

it('should render only moon icon when light theme is active', () => {
  const { container } = render(
    <ThemeToggle changeTheme={onThemeChange} theme={lightTheme} />
  );
  expect(container.querySelector('.gg-moon')).toBeInTheDocument();
  expect(container.querySelector('.gg-sun')).not.toBeInTheDocument();
});

it('should render only sun icon when dark theme is active', () => {
  const { container } = render(
    <ThemeToggle changeTheme={onThemeChange} theme={darkTheme} />
  );
  expect(container.querySelector('.gg-sun')).toBeInTheDocument();
  expect(container.querySelector('.gg-moon')).not.toBeInTheDocument();
});
