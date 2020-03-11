import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should match snapshot', () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
