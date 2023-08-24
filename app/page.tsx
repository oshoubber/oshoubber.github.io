'use client';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ColorText from './components/ColorText';
import { Button } from '@nextui-org/react';
import { ArrowRight } from 'react-bootstrap-icons';

const RotationIcon = () => (
  <span className="transform group-hover:rotate-90 transition-transform duration-300">
    <ArrowRight />
  </span>
);

export default function Home() {
  const [color, setColor] = useState<string>('rgb(234, 179, 8)');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      const hue = (x * 360 + y * 180) % 360;

      setColor(`hsl(${hue}, 100%, 50%)`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen pb-12 transition-colors duration-500 dark:bg-background bg-light-background">
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
            With a passion for crafting intuitive and scalable web applications,
            I love collaborating with teams to bring beautiful, functional, and
            intuitive user experiences to life.
          </p>
          <p className="text-xl pt-10">
            Dive deeper to discover my <ColorText text="journey" />, the{' '}
            <ColorText text="projects" /> I&rsquo;ve poured my heart into, and
            the <ColorText text="expertise" /> I bring to the table.
          </p>
          <p className="text-base pt-10">This website is a WIP 🛠️</p>
        </div>
        <Button
          className="mt-8 text-xl animate-fadeInUp delay-3s opacity-0 fill-forwards hover:text-white"
          color="secondary"
          size="lg"
          variant="ghost"
          endContent={<RotationIcon />}
        >
          Learn More
        </Button>
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
