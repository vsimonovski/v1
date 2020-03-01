import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

it('should match snapshot', () => {
  const tree = render(<Contact />);
  expect(tree).toMatchSnapshot();
});

it('should display contact items', () => {
  const { getByText } = render(<Contact />);

  const workplace = getByText(/@Hooloovoo/i);
  const githubHandle = getByText(/@vsimonovski/i);
  const blogHandle = getByText(/@blog.vsimonovski/i);
  const contactHandle = getByText(/Contact me?/i);

  expect(workplace).toBeInTheDocument();
  expect(githubHandle).toBeInTheDocument();
  expect(blogHandle).toBeInTheDocument();
  expect(contactHandle).toBeInTheDocument();
});
