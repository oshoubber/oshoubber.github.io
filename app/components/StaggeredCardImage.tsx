import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  ScrollShadow
} from '@nextui-org/react';

type InfoCardType = {
  title: string;
  content: string;
  colorScheme?: string;
};

type CardImageType = {
  image: string;
  footer: React.ReactNode;
  link?: string;
};

type StaggeredCardImageType = InfoCardType & CardImageType & { index: number };

const InfoCard: React.FC<InfoCardType> = ({ title, content, colorScheme }) => {
  return (
    <Card isBlurred>
      <CardHeader
        className={`text-3xl font-semibold text-gradient-shine ${
          colorScheme ? `shine-${colorScheme}` : ''
        } ? transform hover:scale-[1.02] transition-transform duration-300`}
      >
        {title}
      </CardHeader>
      <CardBody className="text-large whitespace-pre-wrap">
        <ScrollShadow className="max-h-[320px]">{content}</ScrollShadow>
      </CardBody>
    </Card>
  );
};

const CardImage: React.FC<CardImageType> = ({ image, footer, link }) => {
  const CardImageComponent = (
    <Card
      className="hover:text-blue-500 transform hover:scale-105 transition-transform duration-300"
      isPressable
      isFooterBlurred
      isBlurred
    >
      <Image
        alt=""
        src={image}
        className="w-full object-cover aspect-square max-h-[700px]"
      />
      <CardFooter className="flex h-4 justify-end py-4">{footer}</CardFooter>
    </Card>
  );

  return link ? (
    <a href={link} rel="noreferrer noopener" target="_blank">
      {CardImageComponent}
    </a>
  ) : (
    CardImageComponent
  );
};

const StaggeredCardImage: React.FC<StaggeredCardImageType> = ({
  title,
  content,
  colorScheme,
  image,
  index,
  footer,
  link
}) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const shouldAlternate =
    index % 2 === 0 || (windowWidth !== null && windowWidth < 1024);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 m-auto place-content-center items-center">
      <div className="flex justify-start mb-16 lg:pl-[10%] lg:pr-[10%] lg:mx-0 mx-auto">
        {shouldAlternate ? (
          <InfoCard title={title} content={content} colorScheme={colorScheme} />
        ) : (
          <CardImage image={image} footer={footer} link={link} />
        )}
      </div>
      <div className="flex justify-end lg:pl-[10%] lg:pr-[10%] lg:mx-0 mx-auto">
        {shouldAlternate ? (
          <CardImage image={image} footer={footer} link={link} />
        ) : (
          <InfoCard title={title} content={content} colorScheme={colorScheme} />
        )}
      </div>
    </div>
  );
};

export default React.memo(StaggeredCardImage);
