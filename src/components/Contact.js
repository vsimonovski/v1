/* eslint-disable */

import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <section className="contact">
      <div className="item">
        <span className="emoji">👨‍💻</span>
        <a
          href="https://www.linkedin.com/in/vsimonovski/"
          className="value"
          data-wenk="👈  Where I work"
          data-wenk-pos="right"
        >
          @Hooloovoo
        </a>
      </div>
      <div className="item">
        <span className="emoji">💻</span>
        <a
          href="https://github.com/vsimonovski"
          className="value"
          data-wenk="👈  Check out my GitHub"
          data-wenk-pos="right"
        >
          @vsimonovski
        </a>
      </div>
      <div className="item">
        <span className="emoji">🗒️</span>
        <a
          href="http://blog.vsimonovski.me/"
          className="value"
          data-wenk="👈  Sometimes I like to write about code"
          data-wenk-pos="right"
        >
          @blog.vsimonovski
        </a>
      </div>
      <div className="item">
        <span className="emoji">💌</span>
        <a href="mailto:vsimonovski@outlook.com" className="value">
          Contact me?
        </a>
      </div>
    </section>
  );
}
