import supercall from "./images/supercall.png";
import supercall1 from "./images/supercall1.png";
import supercall2 from "./images/supercall2.png";
import supercall3 from "./images/supercall3.png";
import supercall4 from "./images/supercall4.png";
import supercall5 from "./images/supercall5.png";
import supercall6 from "./images/supercall6.png";
import supercall7 from "./images/supercall7.png";
import supercall8 from "./images/supercall8.png";
import supercall9 from "./images/supercall9.png";
import supercall10 from "./images/supercall10.png";

export const tokens = {
  size: {
    maxWidth: "1000px",
  },
  font: {
    size: {
      text: {
        lg: "1.4rem",
        md: "1.2rem",
        sm: "1rem",
      },
      heading: {
        xl: "4rem",
        lg: "3rem",
        md: "2rem",
        sm: "1.5rem",
        xs: "1.2rem",
      },
    },
    family: {
      text: "Rowdies, sans-serif",
      heading: "Baron, sans-serif",
    },
  },
  media: {
    xs: "only screen and (max-width: 400px)",
    sm: "only screen and (max-width: 600px)",
    md: "only screen and (max-width: 900px)",
    lg: "only screen and (max-width: 1200px)",
  },
  color: {
    // primaryLight: "#ff367c",
    primaryLight: "#f01d7c",
    primaryDark: "#f7930f",
    bgLight: "#f2eee9",
    pageBgLight: "#e6dfd5",
    textLight: "#21201f",
    bgDark: "#2a2927",
    textDark: "#f2ebe4",
    pageBgDark: "#21201f",
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
      title: "Supercall",
    },
    title: "Supercall",
    overview:
      "Supercall is a video conferencing app targeted primarily at the influencer market. It allows influencers to host one-on-one video calls with their fans at a set length and price. The influencer will be provided a link to their page that they can share across platforms. Fans can follow the link to request a call with that influencer by selecting up to three potential meeting times.",
    stack: [
      "React (Remix)",
      "Chakra UI",
      "PostgreSQL",
      "Firebase / Google Cloud",
      "Stripe API",
      "Amazon Chime SDK",
      "Postmark",
    ],
    role: "I worked as part of a two person team on this project. I worked full-stack but was primarily focused on the front-end. I created the entirety of the UI, email templates, account management, and scheduling logic.",
    interest:
      "The primary challenge of this app was the global scheduling. We needed to ensure that the influencer and fans timezone were accounted for when scheduling a call. We also needed to ensure that the influencer was not double booked. I created a scheduling algorithm that would correctly render the available dates and times to the user based on their timezone.",
    live: "www.supercall.club",
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
