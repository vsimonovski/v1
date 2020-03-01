import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

it('should match snapshot', () => {
  const tree = render(<Title />);
  expect(tree).toMatchSnapshot();
});
