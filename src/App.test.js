import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should match snapshot', () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});

// it('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
