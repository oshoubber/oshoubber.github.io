import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button
} from '@nextui-org/react';

type TimelineEventType = {
  year: number;
  title: string;
  details: string;
};

const journeyData = [
  {
    year: 2018,
    title: 'Created My First App',
    details: 'Developed my first mobile app using React Native...'
  },
  {
    year: 2019,
    title: 'Graduated from University',
    details: 'Completed my degree in Computer Science from XYZ University...'
  },
  {
    year: 2020,
    title: 'Graduated from University',
    details: 'Completed my degree in Computer Science from XYZ University...'
  }
  // ... add more events
];

const TimelineEvent: React.FC<TimelineEventType> = ({
  year,
  title,
  details
}) => {
  return (
    <div className="relative timeline-vertical-line dark:before:border-gray-400 light:before:border-zinc-950">
      <Popover showArrow placement="bottom" backdrop="blur" className="z-20">
        <PopoverTrigger>
          <Button
            className="text-white"
            size="sm"
            radius="full"
            variant="shadow"
            color="secondary"
          >
            {year}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          {(titleProps) => (
            <div className="px-1 py-2">
              <h3 className="font-bold" {...titleProps}>
                {title}
              </h3>
              {details}
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="flex flex-col justify-between h-16">
      <hr className="border dark:border-gray-400 light:border-zinc-950 rounded-4xl" />
      <div className="flex justify-between items-center w-full">
        {journeyData.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
