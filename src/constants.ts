import supercall from './images/supercall.png';
import supercall1 from './images/supercall1.png';
import supercall2 from './images/supercall2.png';
import supercall3 from './images/supercall3.png';
import supercall4 from './images/supercall4.png';
import supercall5 from './images/supercall5.png';
import supercall6 from './images/supercall6.png';
import supercall7 from './images/supercall7.png';
import supercall8 from './images/supercall8.png';
import supercall9 from './images/supercall9.png';
import supercall10 from './images/supercall10.png';
import askbox from './images/askbox.png';
import askbox1 from './images/askbox1.png';
import askbox2 from './images/askbox2.png';
import askbox3 from './images/askbox3.png';
import askbox4 from './images/askbox4.png';
import askbox5 from './images/askbox5.png';
import askbox6 from './images/askbox6.png';
import askbox7 from './images/askbox7.png';
import askbox8 from './images/askbox8.png';
import askbox9 from './images/askbox9.png';
import askbox10 from './images/askbox10.png';
import askbox11 from './images/askbox11.png';
import askbox12 from './images/askbox12.png';
import askbox13 from './images/askbox13.png';
import askbox14 from './images/askbox14.png';
import whatever from './images/whatever.png';
import whatever1 from './images/whatever1.png';
import whatever2 from './images/whatever2.png';
import whatever3 from './images/whatever3.png';
import whatever4 from './images/whatever4.png';
import whatever5 from './images/whatever5.png';
import whatever6 from './images/whatever6.png';
import whatever7 from './images/whatever7.png';
import whatever8 from './images/whatever8.png';
import whatever9 from './images/whatever9.png';
import whatever10 from './images/whatever10.png';
import whatever11 from './images/whatever11.png';

export const tokens = {
  size: {
    maxWidth: '1000px',
  },
  font: {
    size: {
      text: {
        lg: '1.4rem',
        md: '1.2rem',
        sm: '1rem',
        xs: '0.8rem',
      },
      heading: {
        xl: '4rem',
        lg: '3rem',
        md: '2rem',
        sm: '1.5rem',
        xs: '1.2rem',
      },
    },
    family: {
      text: 'Rowdies, sans-serif',
      heading: 'Baron, sans-serif',
    },
  },
  media: {
    xs: 'only screen and (max-width: 400px)',
    sm: 'only screen and (max-width: 600px)',
    md: 'only screen and (max-width: 900px)',
    lg: 'only screen and (max-width: 1200px)',
  },
  color: {
    // primaryLight: "#ff367c",
    primaryLight: '#f01d7c',
    primaryDark: '#f7930f',
    bgLight: '#f2eee9',
    pageBgLight: '#e6dfd5',
    textLight: '#21201f',
    bgDark: '#2a2927',
    textDark: '#f2ebe4',
    pageBgDark: '#21201f',
  },
};

export interface ProjectData {
  card: {
    image: string;
    title: string;
  };
  title: string;
  overview: string;
  stack: string[];
  role: string;
  interest: string;
  images: string[];
  github?: string;
  live?: string;
}

export const projectData: ProjectData[] = [
  {
    card: {
      image: supercall,
      title: 'Supercall',
    },
    title: 'Supercall',
    overview:
      'Supercall is a video conferencing app targeted primarily at the influencer market. It allows influencers to host one-on-one video calls with their fans at a set length and price. The influencer will be provided a link to their page that they can share across platforms. Fans can follow the link to request a call with that influencer by selecting up to three potential meeting times.',
    stack: [
      'React (Remix)',
      'Chakra UI',
      'PostgreSQL',
      'Firebase / Google Cloud',
      'Stripe API',
      'Amazon Chime SDK',
      'Postmark',
    ],
    role: 'I worked as part of a two person team on this project. I worked full-stack but was primarily focused on the front-end. I created the entirety of the UI, email templates, account management, scheduling logic, and link sharing.',
    interest:
      'The primary challenge of this app was the global scheduling. We needed to ensure that the influencer and fans timezone were accounted for when scheduling a call. We also needed to ensure that the influencer was not double booked. I created a scheduling algorithm that would correctly render the available dates and times to the user based on their timezone.',
    live: 'https://www.supercall.club',
    images: [
      supercall1,
      supercall2,
      supercall3,
      supercall4,
      supercall5,
      supercall6,
      supercall7,
      supercall8,
      supercall9,
      supercall10,
    ],
  },
  {
    card: {
      image: askbox,
      title: 'askbox',
    },
    title: 'askbox',
    overview:
      'Askbox is a web app that allows fans to send questions to influencers. Influencers can then answer the questions with a video response that can be unlocked by any other person for a fee set by the influencer. Fans will see a preview of the first few seconds of the answer before deciding if they want to unlock the answer.',
    stack: ['React (Remix)', 'Chakra UI', 'PostgreSQL', 'Firebase / Google Cloud', 'Stripe API', 'Mux', 'Postmark'],
    role: 'I worked as part of a two person team on this project. I worked full-stack but was primarily focused on the front-end. I created the entirety of the UI, email templates, account management, video uploading/playback, and link sharing.',
    interest:
      'For a smooth user experience I needed to implement a subtle data polling solution on the influencers home page to ensure that the video previews and incoming questions would update in real time. With Remix, this required me to set an interval in a custom hook that would update the data every 5 seconds utilizing the useFetcher hook. I also needed to ensure that the interval was cleared when the user navigated away from the page.',
    live: 'https://www.askbox.club',
    images: [
      askbox1,
      askbox2,
      askbox3,
      askbox4,
      askbox5,
      askbox6,
      askbox7,
      askbox8,
      askbox9,
      askbox10,
      askbox11,
      askbox12,
      askbox13,
      askbox14,
    ],
  },
  {
    card: {
      image: whatever,
      title: 'Whatever.ai',
    },
    title: 'Whatever.ai',
    overview:
      "Whatever.ai is a web app that allows users to harness the power of AI to replace anyone in a photo with themselves. Users will go through a face ID flow to train their own Stable Diffusion model. Users can then upload a photo and utilize MediaPipe's interactive segmentation to select the person they want to replace. Unfortunately, development on the project was halted before completion.",
    stack: [
      'React (Remix)',
      'Chakra UI',
      'PostgreSQL',
      'Firebase / Google Cloud',
      'Stripe API',
      'Stable Diffusion',
      'MediaPipe',
      'Human AI face detection',
    ],
    role: 'I worked as the primary engineer on this project. I worked full-stack, shaping both the front and back end.',
    interest: `Creating the flow for training the Stable Diffusion model was a lot of fun. Utilizing a library that receives the users webcam video as input, it output face detection metrics on an interval with the use of requestAnimationFrame. To validate and snap a photo, I would compare those metrics to the current face position being captured. Once a user had successfully captured a photo in each position, we would iterate over those images with MediaPipe selfie segmentation to crop out the users face from the rest of the image.`,
    images: [
      whatever1,
      whatever2,
      whatever3,
      whatever4,
      whatever5,
      whatever6,
      whatever7,
      whatever8,
      whatever9,
      whatever10,
      whatever11,
    ],
  },
];

export const favorites = ['React', 'TypeScript', 'styled-components', 'PostgreSQL', 'Express', 'Prisma', 'Remix'];
export const stack = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Firebase',
  'Google Cloud Platform',
  'styled-components',
  'Chakra UI',
  'Tailwind',
  'Stable Diffusion',
  'MediaPipe',
  'Next.js',
  'NestJs',
  'Sequelize',
  'Prisma',
  'Stripe API',
  'MongoDB',
  'Remix',
  'Git',
  // sort alphabetically
].sort((a, b) => a.localeCompare(b));
