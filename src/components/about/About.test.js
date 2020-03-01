import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

it('should match snapshot', () => {
  const tree = render(<About />);
  expect(tree).toMatchSnapshot();
});

it('renders about section and tooltip', () => {
  const { container } = render(<About />);

  const tooltip = container.querySelector('span.tooltip');
  const about = container.querySelector('section.about');

  expect(about).toBeInTheDocument();
  expect(tooltip).toBeInTheDocument();
});
