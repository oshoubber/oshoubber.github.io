import NavBar from './components/NavBar';

const YellowText: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-semibold text-yellow-500">{text}</span>
);

export default function Home() {
  return (
    <main className="dark dark:bg-[#111] flex flex-col min-h-screen items-center pb-12">
      <NavBar />
      <div className="pt-24 px-12">
        <h1 className="text-5xl">
          Hello, world! 👋🏻🌎
          <br />
          My name is <YellowText text="Osama Shoubber" />.
        </h1>
        <h2 className="text-3xl pt-20">
          I&rsquo;m a <YellowText text="Full-Stack" /> and{' '}
          <YellowText text="Front-End" /> Software Engineer living in the Bay
          Area.
        </h2>
        <p className="text-xl pt-10">
          With a passion for crafting intuitive user experiences and scalable
          applications, I love collaborating with teams to bring beautiful,
          functional, and intuitive user experiences to life.
        </p>
        <p className="text-xl pt-10">
          Dive deeper to discover my <YellowText text="journey" />, the{' '}
          <YellowText text="projects" /> I&rsquo;ve poured my heart into, and
          the <YellowText text="expertise" /> I bring to the table.
        </p>
        <p className="text-l pt-10">This website is a WIP 🛠️</p>
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
