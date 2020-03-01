import React from 'react';
import './About.scss';

export default function About() {
  return (
    <section className="about">
      I’m a{' '}
      <span
        className="tooltip"
        data-wenk="An organism that converts  ☕  into code."
      >
        javascript developer
      </span>{' '}
      with strong comp. sci. background. Passionate about code quality, best
      practices, security, performance, and everything web related.
      <br /> (p.s. I’m huge javascript enthusiast)
    </section>
  );
}
