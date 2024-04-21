import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Lautaro Delloni",
  initials: "",
  location: "Santa Fe, Argentina",
  locationLink: "https://www.google.com/maps/place/Santa+Fe,+Santa+Fe+Province",
  about: "Software Engineer",
  summary:
    "",
  avatarUrl: "",
  personalWebsiteUrl: "https://devlloni.me",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/devlloni",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/lautarodelloni",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Nacional de Córdoba",
      degree: "Bachelor's degree in computer science",
      start: "2018",
      end: "2020 - (not finished)",
    },
    // {
    //   school: "Universidad Tecnológica Nacional",
    //   degree: "Professional Full-Stack Developer",
    //   start: "Feb 2022",
    //   end: "Aug 2022",
    // },
  ],
  work: [
    {
      company: "NaranjaX",
      link: "https://naranjax.com",
      badges: ["Full-time"],
      title: "Software Engineer",
      start: "October 2022",
      end: "Present",
      description:
        "Fullstack development. Services on Lambda/Serverless, frontend on Angular. NodeJS, Typescript, AWS in multiple projects. Working from @rocbird",
    },
    {
      company: "Colcar Merbus",
      link: "https://app.debuses.com/#/home",
      badges: ["Full-Time"],
      title: "Frontend Engineer",
      start: "May 2022",
      end: "October 2022",
      description:
        "Working and developing alone 'Debuses' project. Web application for bus marketplace. Developed with Angular, Firebase and PrimeNG.",
    },
    {
      company: "MercadoLibre",
      link: "https://mercadolibre.com.ar",
      badges: ["Full-Time"],
      title: "Software Development Analyst",
      start: "Jan 2021",
      end: "May 2022",
      description:
        "Fullstack development, most frontend oriented. Planning, testing, and developing new sites on MercadoLibre marketplace and MercadoPago wallet app. Working with React/Next, Nodejs, Figma and MERN Stack.",
    },
    {
      company: "RocBird",
      link: "https://www.rocbird.io",
      badges: ["Contract"],
      title: "Fullstack developer",
      start: "Sep 2020",
      end: "Apr 2021",
      description:
        "Fullstack web development (NodeJS, ReactJS, Angular, Typescript, and MySQL. Innovation applications and creating new ones from scratch. Maintainer on coupon book app on Angular, and developing from scratch marketplace with React, PrimeReact and Nodejs with MySQL and TiendaNube API."
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Full-time"],
      title: "Full Stack Engineer",
      start: "Sept 2018",
      end: "Sept 2021",
      description: "Fullstack web development (MariaDB, CodeIgniter, Bootstrap). Audited, improved and deployed smart contracts for ERC20 tokens using Solidity, OpenZeppelin Contracts and Node scripts.",
    },
  ],
  skills: [
    // "Spring Boot",
    "React",
    "Angular",
    "NextJS",
    "NestJS",
    "MySQL",
    "MongoDB",
    "Node.js",
    "TypeScript",
    "Amazon Web Services",
  ],
} as const;
