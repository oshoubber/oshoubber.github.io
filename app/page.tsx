'use client';
import NavBar from './components/NavBar';
import ColorText from './components/ColorText';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <main className="dark dark:bg-[#111] flex flex-col min-h-screen items-center pb-12">
      <NavBar />
      <div className="pt-24 px-12">
        <h1 className="text-5xl animate-fadeInUp">
          Hello, world! 👋🏻🌎
          <br />
          My name is <ColorText text="Osama Shoubber" color={color} />.
        </h1>

        <h2 className="text-3xl pt-20 animate-fadeInUp delay-1s opacity-0 fill-forwards">
          I&rsquo;m a <ColorText text="Full-Stack" /> and{' '}
          <ColorText text="Front-End" /> Software Engineer living in the Bay
          Area.
        </h2>
        <div className="animate-fadeInUp delay-2s opacity-0 fill-forwards">
          <p className="text-xl pt-10">
            With a passion for crafting intuitive user experiences and scalable
            applications, I love collaborating with teams to bring beautiful,
            functional, and intuitive user experiences to life.
          </p>
          <p className="text-xl pt-10">
            Dive deeper to discover my <ColorText text="journey" />, the{' '}
            <ColorText text="projects" /> I&rsquo;ve poured my heart into, and
            the <ColorText text="expertise" /> I bring to the table.
          </p>
          <p className="text-l pt-10">This website is a WIP 🛠️</p>
        </div>
      </div>
    </main>
  );
}

{
  /* <p className="text-l pt-10">
I&rsquo;m a second generation Iraqi-American 🇮🇶 🇺🇸. I'm fluent in
English and Arabic, and know some Spanish as well! I graduated from
Santa Clara University with a B.S. in Computer Science & Engineering.
</p> */
}
