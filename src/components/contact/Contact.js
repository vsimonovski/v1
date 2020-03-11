import React from 'react';
import {
  ContactItem,
  ContactLink,
  ContactSection,
  Emoji
} from './Contact.style';

function Contact() {
  return (
    <ContactSection>
      <ContactItem>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Emoji>👨‍💻</Emoji>
        <ContactLink
          href="https://www.linkedin.com/in/vsimonovski/"
          data-wenk="👈  I work here"
          data-wenk-pos="right"
        >
          @Hooloovoo
        </ContactLink>
      </ContactItem>
      <ContactItem>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Emoji>💻</Emoji>
        <ContactLink
          href="https://github.com/vsimonovski"
          data-wenk="👈  Check out my GitHub"
          data-wenk-pos="right"
        >
          @vsimonovski
        </ContactLink>
      </ContactItem>
      <ContactItem>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Emoji>🗒️</Emoji>
        <ContactLink
          href="http://blog.vsimonovski.me/"
          data-wenk="👈  Sometimes I like to write about code"
          data-wenk-pos="right"
        >
          @blog.vsimonovski
        </ContactLink>
      </ContactItem>
      <ContactItem>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Emoji>💌</Emoji>
        <ContactLink href="mailto:vsimonovski@outlook.com">
          Contact me?
        </ContactLink>
      </ContactItem>
    </ContactSection>
  );
}

export default Contact;
