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
      },
      heading: {
        xl: '4rem',
        lg: '3rem',
        md: '2rem',
        sm: '1.5rem',
      },
    },
    family: {
      text: 'Rowdies, sans-serif',
      heading: 'Baron, sans-serif',
    },
  },
  media: {
    sm: 'only screen and (max-width: 600px)',
    md: 'only screen and (max-width: 900px)',
    lg: 'only screen and (max-width: 1200px)',
  },
  color: {
    primary: '#ff367c',
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
  images: string[];
  github: string;
  live: string;
}

export const projectData: ProjectData[] = [
  {
    card: {
      image: supercall,
      title: 'Supercall',
    },
    title: 'Supercall',
    overview:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    stack: [
      'React (Remix)',
      'Chakra UI',
      'PostgreSQL',
      'Firebase / Google Cloud',
      'Stripe API',
      'Amazon Chime SDK',
      'Postmark',
    ],
    role: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    github: '',
    live: '',
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
];
