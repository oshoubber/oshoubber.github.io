import { Linkedin, Github, EnvelopeAt } from 'react-bootstrap-icons';
import { Button } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className="text-white p-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Button
          isIconOnly
          className="hover:animate-bounce hover:text-yellow-500"
          variant="light"
        >
          <a
            href="https://www.linkedin.com/in/oshoubber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
        </Button>
        <Button
          isIconOnly
          className="hover:animate-bounce hover:text-yellow-500"
          variant="light"
        >
          <a
            href="https://github.com/oshoubber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
        </Button>
        <Button
          isIconOnly
          className="hover:animate-bounce hover:text-yellow-500"
          variant="light"
        >
          <a
            href="mailto:oshoubber@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeAt size={20} />
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
