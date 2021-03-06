'use client';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ColorText from './components/ColorText';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import StaggeredCardImage from './components/StaggeredCardImage';

import TimelineContent from './content/TimelineContent';

import { Button, Divider } from '@nextui-org/react';
import { ArrowRight } from 'react-bootstrap-icons';

export default function Home() {
  const [color, setColor] = useState<string>('rgb(234, 179, 8)');

  const scrollToElement = () => {
    const element = document.getElementById('past-experiences-section');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
    <main className="min-h-screen w-full flex flex-col transition-colors duration-500 dark:bg-background bg-light-background">
      <ParticleBackground />
      <NavBar />
      <section
        id="intro-section"
        className="h-screen flex flex-col flex-1 items-start justify-between my-12 px-12 gap-y-20"
      >
        <h1 className="text-responsive-h1 animate-fadeInUp opacity-0 fill-forwards">
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
        </div>
        <Button
          className="mt-8 w-fit text-xl animate-fadeInUp delay-3s opacity-0 fill-forwards hover:text-white"
          color="secondary"
          size="lg"
          variant="ghost"
          endContent={
            <span className="transform group-hover:rotate-90 transition-transform duration-300">
              <ArrowRight />
            </span>
          }
          onClick={scrollToElement}
        >
          Learn More
        </Button>
      </section>
      <Divider className="self-center w-11/12" />
      <section
        id="past-experiences-section"
        className="h-screen flex flex-col flex-1 items-start p-12"
      >
        <h1 className="relative text-responsive-h1 mb-16">
          A look into the <ColorText text="past..."></ColorText> 👀
        </h1>
        <div className="flex flex-col justify-between gap-24">
          {TimelineContent.map((item, index) => (
            <StaggeredCardImage
              content={item.content}
              colorScheme={item.colorScheme}
              index={index}
              image={item.image}
              key={index}
              footer={item.footer}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* <p className="text-l pt-10">
I&rsquo;m a second generation Iraqi-American 🇮🇶 🇺🇸. I'm fluent in
English and Arabic, and know some Spanish as well!
</p> */
