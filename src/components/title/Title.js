import React from 'react';
import { BackgroundLine, EmojiWithAttrs, Intro, Wave } from './Title.style';

export default function Title() {
  return (
    <section>
      <Intro>
        <Wave />
        Hi, I'm Vladimir
        <BackgroundLine />
      </Intro>
      <br />
      <Intro>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}I
        <EmojiWithAttrs>❤️</EmojiWithAttrs>
        Web
        <BackgroundLine />
      </Intro>
    </section>
  );
}
