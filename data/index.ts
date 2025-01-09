import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration to foster open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast filled with passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a cross-platform Flutter app",
    description: "Flutter-Driven Solutions",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's collaborate on a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Flutter Application",
    des: "More than chat app, includes with cloud/local storage, OAuth, Market Place and profile management.",
    img: "/p1.png",
    iconLists: ["/flutter.svg", "/firebase.svg", "/git.svg", "/dart.svg", "/swift.svg"],
    link: "/contact",
  },
  {
    id: 2,
    title: "My Portfolio",
    des: "A modern, responsive portfolio showcasing full stack skills and projects using React, Next.js, and Tailwind CSS.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://github.com/justkelvin/portfolio",
  },
  {
    id: 3,
    title: "AI Movie SaaS - RealPick.io",
    des: "Next-gen movie recommendation web app using AstraDB AI models, built with Next.js, shadcn UI, and PostgreSQL.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/tmdb.svg", "/c.svg", "/postgresql.svg"],
    link: "https://github.com/justkelvin/reelpick.io",
  },
  {
    id: 4,
    title: "Clean My Garden",
    des: "A comprehensive garden maintenance solution, managing schedules and tracking progress for optimal garden care.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/ts.svg", "/dock.svg", "/postgresql.svg", "/aws-light.svg"],
    link: "https://github.com/justkelvin/garden-management",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Gift was an absolute pleasure. Their expertise in full stack development and dedication to the project ensured we achieved outstanding results.",
    name: "Gift Mwaiseghe",
    title: "Software EngineerSoftware Engineer GRIFFIN Global Technologies, LLC",
    img: "/gift.jpeg"
  },
  {
    quote: "Kelvin brought incredible technical expertise and a creative vision to our Flutter app project. Their ability to understand our requirements and deliver a high-quality, user-friendly app exceeded our expectations. We highly recommend Kelvin for any development needs.",
    name: "Lucy Wambui",
    title: "UI/UX Designer, SyncVerse",
    img: "/exp1.svg"
  },
  {
    quote:
      "Working with Kelvin was a game-changer for our movie recommendation platform. Their innovative approach and proficiency with modern tech stacks ensured our project was a success. His dedication and skill are truly impressive.",
    name: "Mark Johnson",
    title: "AI Engineer, RealPick.io",
    img: "/exp4.svg"
  },
  {
    quote:
      "Kelvin's full stack development skills transformed my vision into reality. Their commitment to excellence and attention to detail were key factors in the success of our garden maintenance solution. We couldn't be happier with the outcome.",
    name: "Vijay Nayak",
    title: "Masters Student, Clean My Garden",
    img: "/exp4.svg"
  },
  {
    quote:
      "I had the pleasure working on this portfolio website. My expertise in React, Next.js, and Tailwind CSS resulted in a modern, responsive site that perfectly showcases my projects. I am a true professional and a talented developer.",
    name: "Kelvin Muinde",
    title: "Full Stack Developer",
    img: "/kelvin.jpeg"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Intern - Fraud Detection",
    desc: "Assisted in the development of a Web platform for user fraudlent activities detection.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - SyncVerse",
    desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full Stack Project",
    desc: "Led a team develop a mobile app for client, from initial concept to deployment on App Stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead S/W Dev - StartUp Firm",
    desc: "Developes and maintains user-facing features using modern technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/justkelvin"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/alias_notfound",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "http://linkedin.com/in/kelvinmuinde",
  },
];
