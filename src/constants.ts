import supercall from './images/supercall.png';

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
      text: 'Rowdies',
      heading: 'Baron',
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
    stack: ['React (Remix)', 'Chakra UI', 'PostgreSQL'],
  },
];
