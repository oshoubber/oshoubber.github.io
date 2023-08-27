import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
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
};

type StaggeredCardImageType = InfoCardType & CardImageType;

const InfoCard: React.FC<InfoCardType> = ({ title, content }) => {
  return (
    <Card className="h-min" isBlurred>
      <CardHeader className="text-3xl">{title}</CardHeader>
      <CardBody>{content}</CardBody>
    </Card>
  );
};

const CardImage: React.FC<CardImageType> = ({ image, footer }) => {
  return (
    <Card
      className="aspect-square max-h-[700px] transform hover:scale-105 transition-transform duration-300"
      isPressable
    >
      <Image
        alt=""
        src={image}
        className="w-full h-full object-cover aspect-square"
      />
      <CardFooter className="flex h-full justify-end items-end absolute bottom-0 z-10 hover:text-blue-500">
        {footer}
      </CardFooter>
    </Card>
  );
};

const StaggeredCardImage: React.FC<StaggeredCardImageType> = ({
  title,
  content,
  image,
  footer
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-20 m-auto place-content-center staggered-card-padding items-center">
      <div className="flex justify-start">
        <InfoCard title={title} content={content} />
      </div>
      <div className="flex justify-end">
        <CardImage image={image} footer={footer} />
      </div>
    </div>
  );
};

export default StaggeredCardImage;
