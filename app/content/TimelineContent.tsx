import { ArrowRight } from 'react-bootstrap-icons';

const TimelineContent = [
  {
    title: 'FutureFrog - My First App',
    content:
      "My initial entry into the field of computer science and application development was marked by a collaborative project to create an Android game, titled 'Future Frog.' The game served as an intriguing exploration into narrative-driven experiences, where the protagonist—a frog entangled in the mundanity of a dead-end office job—finds himself embroiled in unanticipated events, propelling him into a futuristic adventure. The project was engineered in an 8-bit visual aesthetic and afforded me a comprehensive understanding of various technical aspects, including but not limited to, 2D environment mapping, character movement mechanics, animation sequencing, and framerate optimization. Not only did 'Future Frog' push the boundaries of my coding abilities, but it also offered invaluable insights into the complexities and challenges associated with end-to-end application development. The project served as a catalyst for my ongoing journey in the realm of software engineering, providing both practical experience and a renewed sense of enthusiasm for the discipline.",
    image: '/img/FutureFrog.png',
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
    content:
      'Lorem ipsum dolor sit amet, ad pro corpora voluptaria. Soleat ubique aperiri at ius, qui at porro noluisse iracundia, dolorum scaevola sit ut. Meliore reprehendunt eu ius, paulo dicam an per. At accusam repudiare inciderint ius, ad sea homero dissentiet eloquentiam, augue eirmod vel ea. Ne sumo eligendi sit. Cu ius putent officiis, vix cu labitur numquam. Per rebum quidam contentiones ei, vix an diceret nominati convenire, mutat etiam eleifend pro in. Te tantas feugait tibique eum. Te dicunt luptatum vel, et facilisi accommodare mea. Ea tale volumus usu, est ei mediocrem hendrerit reprehendunt. Et mea stet constituto. Et tation ocurreret eam. His habeo postea erroribus et, sed salutatus contentiones ei. Rationibus theophrastus eum ut. Choro similique te eam, quodsi detracto mediocrem eu vis, munere quidam inermis et eam. Mea et latine inciderint. Porro labitur vim ei, per altera aliquid no, cu est democritum comprehensam.',
    image: '/sun.jpg',
    footer: (
      <div className="flex items-center space-x-1">
        <p>GitHub</p>
        <ArrowRight />
      </div>
    )
  },
  {
    title: 'Moon Art',
    content:
      'Lorem ipsum dolor sit amet, ad pro corpora voluptaria. Soleat ubique aperiri at ius, qui at porro noluisse iracundia, dolorum scaevola sit ut. Meliore reprehendunt eu ius, paulo dicam an per. At accusam repudiare inciderint ius, ad sea homero dissentiet eloquentiam, augue eirmod vel ea. Ne sumo eligendi sit. Cu ius putent officiis, vix cu labitur numquam. Per rebum quidam contentiones ei, vix an diceret nominati convenire, mutat etiam eleifend pro in. Te tantas feugait tibique eum. Te dicunt luptatum vel, et facilisi accommodare mea. Ea tale volumus usu, est ei mediocrem hendrerit reprehendunt. Et mea stet constituto. Et tation ocurreret eam. His habeo postea erroribus et, sed salutatus contentiones ei. Rationibus theophrastus eum ut. Choro similique te eam, quodsi detracto mediocrem eu vis, munere quidam inermis et eam. Mea et latine inciderint. Porro labitur vim ei, per altera aliquid no, cu est democritum comprehensam.',
    image: '/moon_art.jpg',
    footer: (
      <div className="flex items-center space-x-1">
        <p>GitHub</p>
        <ArrowRight />
      </div>
    )
  }
];

export default TimelineContent;
