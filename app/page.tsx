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
    <main className="min-h-screen flex flex-col transition-colors duration-500 dark:bg-background bg-light-background">
      <NavBar />
      <section className="flex flex-col flex-1 w-full justify-between py-16 px-12 gap-8">
        <h1 className="text-responsive-h1 animate-fadeInUp">
          Hello, world! 👋🏻🌎
          <br />
          My name is <ColorText text="Osama Shoubber" color={color} />.
        </h1>
        <h2 className="text-responsive-h2 animate-fadeInUp delay-1s opacity-0 fill-forwards">
          I&rsquo;m a <ColorText text="Full-Stack" /> and{' '}
          <ColorText text="Front-End" /> Software Engineer living in the Bay
          Area.
        </h2>
        <div className="flex flex-col animate-fadeInUp delay-2s opacity-0 fill-forwards justify-between gap-12">
          <p className="text-responsive-p">
            With a passion for crafting intuitive and scalable web applications,
            I love collaborating with teams to bring beautiful, functional, and
            intuitive user experiences to life.
          </p>
          <p className="text-responsive-p">
            Dive deeper to discover my <ColorText text="journey" />, the{' '}
            <ColorText text="projects" /> I&rsquo;ve poured my heart into, and
            the <ColorText text="expertise" /> I bring to the table.
          </p>
          <p className="text-base">This website is a WIP 🛠️</p>
        </div>
        <Button
          className="mt-8 w-fit text-xl animate-fadeInUp delay-3s opacity-0 fill-forwards hover:text-white"
          color="secondary"
          size="lg"
          variant="ghost"
          endContent={<RotationIcon />}
        >
          Learn More
        </Button>
      </section>
      {/* <section className="h-screen w-full"></section> */}
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
