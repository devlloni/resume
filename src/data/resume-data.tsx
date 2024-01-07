import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Federico Mahfoud",
  initials: "",
  location: "",
  locationLink: "",
  about:
    "Full Stack Engineer",
  summary:
    "",
  avatarUrl: "",
  personalWebsiteUrl: "https://federico.mahfoud.ar",
  contact: {
    email: "example@example.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fedemahf",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/fedemahf",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Nacional del Litoral",
      degree: "Associate's Degree in Web Development",
      start: "2023",
      end: "2025",
    },
    {
      school: "Universidad Tecnológica Nacional",
      degree: "Professional Full-Stack Developer",
      start: "Feb 2022",
      end: "Aug 2022",
    },
  ],
  work: [
    {
      company: "Ensolvers",
      link: "https://ensolvers.com",
      badges: ["Full-time"],
      title: "Software Engineer",
      start: "Apr 2022",
      end: "Present",
      description:
        "Software development (Spring Boot, React) and DevOps (AWS, BitBucket, GitHub) in several projects. Also worked as recruitment consultant, doing technical review of potential candidates on software engineering positions.",
    },
    {
      company: "Hyros",
      link: "https://hyros.com",
      badges: ["Contract"],
      title: "DevOps Engineer",
      start: "Jan 2023",
      end: "Present",
      description:
        "Set up iOS and Android in App Store and Play Store. Pipeline development with AWS CodeCommit, AWS CodeBuild, GitHub Actions and Jenkins.",
    },
    {
      company: "Nue Life Health",
      link: "https://nue.life",
      badges: ["Contract"],
      title: "DevOps Engineer",
      start: "Oct 2022",
      end: "Jan 2023",
      description:
        "Infrastructure management (AWS CodeBuild, AWS ECR), Spring Boot app development (Guava Cache, Spring Scheduler, Quartz), tooling migration (Create React App to Vite).",
    },
    {
      company: "Alpha AI",
      link: "https://www.alphagroup.ai",
      badges: ["Contract"],
      title: "Java Developer",
      start: "Apr 2022",
      end: "Dec 2022",
      description:
        "Spring Boot app development with third party APIs integrations.",
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Full-time"],
      title: "Full Stack Engineer",
      start: "Sept 2018",
      end: "Sept 2021",
      description: "Development, installation, configuration, maintenance and administration of software and systems.",
    },
  ],
  skills: [
    "Spring Boot",
    "React",
    "Node.js",
    "TypeScript",
    "Amazon Web Services",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
