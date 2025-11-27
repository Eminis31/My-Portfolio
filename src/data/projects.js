import passwordStrengthChecker from "../assets/passwordstrenghtchecker.png";
import cybersecuritydashboard from "../assets/cybersecuritydashboard.png";
import portfolioimage1 from "../assets/portfolioimage1.png";
import ipchecker from "../assets/ipchecker.png";

const projects = [
  {
    id: 1,
    title: "A Cybersecurity Portfolio",
    image: portfolioimage1,
    description:
      "A cybersecurity Portfolio Built with React, Vite, and Tailwind CSS for responsive design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://mitchel-omijie-portfolio.vercel.app",
    github: "#",
  },
  {
    id: 2,
    title: "A Password Strenght Checker System",
    image: passwordStrengthChecker,
    description:
      "A Password Strenght Checker System. Built with React, Vite, and Firestore for real-time updates.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://password-strength-checker-blush.vercel.app",
    github: "#",
  },
  {
    id: 3,
    title: "Ip Checker",
    image: ipchecker,
    description:
      "An IP Checker tool that allows users to look up information about an IP address, including its location, ISP, and other relevant details.",
    tech: ["HTML", "PYTHON", "CSS"],
    link: "https://ip-info-finder-beige.vercel.app", //change this to urs
    github: "https://github.com/Oniye-cloud/ip-info-finder.git",
  },
  {
    id: 4,
    title: "Cybersecurity Dashboard",
    image: cybersecuritydashboard,
    description:
      "A Cybersecurity Dashboard that list some tools used in cybersecurity with details.",
    tech: ["React", "Vite", "Tailwind CSS", "Lucide Icons"],
    link: "https://mitchel-dashboard.vercel.app", //change this to urs
    github: "",
  }
];

export default projects;
