import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

it('should match snapshot', () => {
  const tree = render(<About />);
  expect(tree).toMatchSnapshot();
});
