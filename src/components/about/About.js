import React from 'react';
import { AboutSection, Tooltip } from './About.style';

function About() {
  return (
    <AboutSection>
      <Tooltip data-wenk="An organism that converts  ☕  into code.">
        JavaScript enthusiast
      </Tooltip>{' '}
      with strong comp. sci. background.
      <br /> Passionate about code quality, best practices, security,
      performance and everything web related.
    </AboutSection>
  );
}

export default About;
