import { ArrowRight } from 'react-bootstrap-icons';

const TimelineContent = [
  {
    title: 'FutureFrog - My First App',
    colorScheme: 'green',
    content:
      "My initial entry into the field of computer science and application development was marked by a collaborative project to create an Android game, titled 'Future Frog.' The game served as an intriguing exploration into narrative-driven experiences, where the protagonist—a frog entangled in the mundanity of a dead-end office job—finds himself embroiled in unanticipated events, propelling him into a futuristic adventure. The project was engineered in an 8-bit visual aesthetic and afforded me a comprehensive understanding of various technical aspects, including but not limited to, 2D environment mapping, character movement mechanics, animation sequencing, and framerate optimization.\n\nNot only did 'Future Frog' push the boundaries of my coding abilities, but it also offered invaluable insights into the complexities and challenges associated with end-to-end application development. The project served as a catalyst for my ongoing journey in the realm of software engineering, providing both practical experience and a renewed sense of enthusiasm for the discipline.",
    image: '/img/futurefrog.png',
    footer: (
      <div className="flex items-center space-x-1">
        <p>GitHub</p>
        <ArrowRight />
      </div>
    ),
    link: 'https://github.com/oshoubber/FutureFrog'
  },
  {
    title: 'Gears - A Professional Car Helper App',
    colorScheme: 'blue',
    content:
      'Gears represented my initial venture into the Android ecosystem, becoming the first application I successfully developed and monetized on the Google Play Store. The application interfaces seamlessly with Bluetooth and vehicle OBD2 ports, offering diagnostic capabilities for check engine lights. Users receive specific fault codes and are guided through potential solutions.\n\nIn the course of its development, I actively contributed to an open-source OBD2 Java API and conducted rigorous real-world testing using my own vehicle. The app serves as a cost-effective alternative to professional mechanic diagnostics, requiring only an affordable OBD2 adapter.',
    image: '/img/gears.png',
    footer: (
      <div className="flex items-center space-x-1">
        <p>GitHub</p>
        <ArrowRight />
      </div>
    ),
    link: 'https://github.com/oshoubber/Gears'
  },
  {
    title: 'Education - Santa Clara University',
    colorScheme: 'red',
    content:
      "During my 2015-2019 tenure at Santa Clara University, I pursued a Bachelor's degree in Computer Science and Engineering, uncovering my passion for web engineering and mobile app development, particularly in React, Android, and iOS. Simultaneously, I discovered my aptitude for technical writing, transforming complex ideas into accessible content. Today, I stand at the nexus of technology and communication, thriving as a software engineer while harnessing my talent for demystifying technology through writing.\n\nSanta Clara University was more than an educational experience; it was a transformative journey of self-discovery, igniting my enthusiasm for these dual pursuits. I eagerly anticipate the future's exciting challenges and opportunities.",
    image: '/img/scu.png',
    footer: (
      <div className="flex items-center space-x-1">
        <p>SCU Website</p>
        <ArrowRight />
      </div>
    ),
    link: 'https://www.scu.edu/'
  }
];

export default TimelineContent;
