'use client';
import NavBar from './components/NavBar';
import ColorText from './components/ColorText';
import { useState, useEffect } from 'react';

export default function Home() {
  const [color, setColor] = useState<string>('rgb(255, 255, 255)');

  useEffect(() => {
    let rafId: number;
    let nextColor: string;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Compute distance from center (normalized between 0 and 1)
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const normalizedDistance = distance / maxDistance;

      // Compute angle in radians
      const angle = Math.atan2(dy, dx);
      const normalizedAngle = (angle + Math.PI) / (2 * Math.PI); // Normalize between 0 and 1

      const red = Math.floor(255 * normalizedDistance);
      const green = Math.floor(255 * (1 - normalizedDistance));
      const blue = Math.floor(255 * normalizedAngle);

      nextColor = `rgb(${red}, ${green}, ${blue})`;

      if (!rafId) {
        rafId = requestAnimationFrame(updateColor);
      }
    };

    const updateColor = () => {
      setColor(nextColor);
      rafId = 0; // Reset RAF id
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

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
