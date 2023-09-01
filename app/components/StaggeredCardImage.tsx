import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image
} from '@nextui-org/react';

const dummyText =
  'Lorem ipsum dolor sit amet, ad pro corpora voluptaria. Soleat ubique aperiri at ius, qui at porro noluisse iracundia, dolorum scaevola sit ut. Meliore reprehendunt eu ius, paulo dicam an per. At accusam repudiare inciderint ius, ad sea homero dissentiet eloquentiam, augue eirmod vel ea. Ne sumo eligendi sit. Cu ius putent officiis, vix cu labitur numquam. Per rebum quidam contentiones ei, vix an diceret nominati convenire, mutat etiam eleifend pro in. Te tantas feugait tibique eum. Te dicunt luptatum vel, et facilisi accommodare mea. Ea tale volumus usu, est ei mediocrem hendrerit reprehendunt. Et mea stet constituto. Et tation ocurreret eam. His habeo postea erroribus et, sed salutatus contentiones ei. Rationibus theophrastus eum ut. Choro similique te eam, quodsi detracto mediocrem eu vis, munere quidam inermis et eam. Mea et latine inciderint. Porro labitur vim ei, per altera aliquid no, cu est democritum comprehensam.';

type InfoCardType = {
  title: string;
  content: string;
};

type CardImageType = {
  image: string;
  footer: React.ReactNode;
  link?: string;
};

type StaggeredCardImageType = InfoCardType & CardImageType & { index: number };

const InfoCard: React.FC<InfoCardType> = ({ title, content }) => {
  return (
    <Card isBlurred>
      <CardHeader className="text-3xl">{title}</CardHeader>
      <CardBody className="text-large">{content}</CardBody>
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
  image,
  index,
  footer,
  link
}) => {
  const shouldAlternate =
    index % 2 === 0 ||
    (typeof window !== 'undefined' && window.innerWidth < 1024);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 m-auto place-content-center staggered-card-padding items-center">
      <div className="flex justify-start mb-16">
        {shouldAlternate ? (
          <InfoCard title={title} content={content} />
        ) : (
          <CardImage image={image} footer={footer} link={link} />
        )}
      </div>
      <div className="flex justify-end">
        {shouldAlternate ? (
          <CardImage image={image} footer={footer} link={link} />
        ) : (
          <InfoCard title={title} content={content} />
        )}
      </div>
    </div>
  );
};

export default React.memo(StaggeredCardImage);
