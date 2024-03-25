import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Federico Mahfoud",
  initials: "",
  location: "Santa Fe, Argentina",
  locationLink: "https://www.google.com/maps/place/Santa+Fe,+Santa+Fe+Province",
  about: "Software Engineer",
  summary:
    "",
  avatarUrl: "",
  personalWebsiteUrl: "https://federico.mahfoud.ar",
  contact: {
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
      end: "Present",
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
        "Created and configured iOS and Android apps in App Store and Play Store. Developed mobile pipelines using AWS CodeCommit, AWS CodeBuild, GitHub Actions and Jenkins.",
    },
    {
      company: "Nue Life Health",
      link: "https://nue.life",
      badges: ["Contract"],
      title: "DevOps Engineer",
      start: "Oct 2022",
      end: "Jan 2023",
      description:
        "Created and configured AWS CodeBuild projects and AWS ECR repositories. Improved performance of Spring Boot apps using Guava Cache, Spring Scheduler and Quartz. Implemented Vite in a React app to improve build time.",
    },
    {
      company: "Alpha AI",
      link: "https://www.alphagroup.ai",
      badges: ["Contract"],
      title: "Java Developer",
      start: "Apr 2022",
      end: "Dec 2022",
      description:
        "Developed integrations with third party APIs in Spring Boot apps."
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
    // "Spring Boot",
    // "React",
    // "Node.js",
    // "TypeScript",
    // "Amazon Web Services",
  ],
} as const;
