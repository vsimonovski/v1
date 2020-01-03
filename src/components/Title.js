import React from 'react';
import './Title.scss';

export default function Title() {
  return (
    <section>
      <h1 className="intro intro--wave">
        Hi, I'm Vladimir
        <span className="background-line"></span>
      </h1>
      <br />
      <h1 className="intro intro--pulse">
        I
        <span className="emoji" role="img" aria-label="heart">
          ❤️
        </span>
        Web
        <span className="background-line"></span>
      </h1>
    </section>
  );
}
