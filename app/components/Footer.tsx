import { Linkedin, Github, EnvelopeAt, Icon } from 'react-bootstrap-icons';
import { Button } from '@nextui-org/react';

type ButtonLinkType = {
  icon: React.ReactNode;
  link: string;
};

const ButtonLink: React.FC<ButtonLinkType> = ({ icon, link }) => (
  <div className="inline-block pt-2 pb-3 hover:animate-bounce hover:text-yellow-500">
    <Button isIconOnly className="text-inherit" variant="light">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  </div>
);

const Footer = () => {
  return (
    <footer className="text-white p-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <ButtonLink
          icon={<Linkedin size={20} />}
          link="https://www.linkedin.com/in/oshoubber/"
        />
        <ButtonLink
          icon={<Github size={20} />}
          link="https://www.github.com/oshoubber/"
        />
        <ButtonLink
          icon={<EnvelopeAt size={20} />}
          link="mailto:oshoubber@gmail.com"
        />
      </div>
    </footer>
  );
};

export default Footer;
