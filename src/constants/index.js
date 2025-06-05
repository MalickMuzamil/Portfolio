
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  css,
  mysql,
  express,
  mui,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
} from '../assets'


import TeamSeven from "../assets/company/Company-logo.png"
import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.png"
import Project4 from "../assets/Project4.jpg"
import Project5 from "../assets/Project5.jpg"
import Project6 from "../assets/Project6.png"

import FirtstImage from "../assets/Testimonials/FirstImage.jpeg"
import secondImage from "../assets/Testimonials/SecondImage.jpeg"
import ThirdImage from "../assets/Testimonials/ThirdImage.jpeg"
import ForthImage from "../assets/Testimonials/ForthImage.jpeg"
import FifthImage from "../assets/Testimonials/FifthImage.jpeg"
import SixthImage from "../assets/Testimonials/SixthImage.jpeg"


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },


];

const experiences = [

  {
    title: "Front-end Developer",
    company_name: "Team Seven Solution",
    icon: TeamSeven,
    iconBg: "#1d1836",
    date: "July 2023 - present",
    points: [
      "Building and maintaining scalable web applications using MEAN and MERN stacks (MongoDB, Express, Angular/React, Node.js).",
      "Integrating RESTful APIs and implementing efficient backend logic with Node.js and Express.",
      "Creating dynamic and responsive UI components using Angular and React.",
      "Managing application state and optimizing performance with tools like Redux and RxJS.",
      "Ensuring cross-browser compatibility and mobile responsiveness using modern CSS frameworks.", ,
    ],
  },

  {
    title: "Angular Developer",
    company_name: "Team Seven Solution",
    icon: TeamSeven,
    iconBg: "#1d1836",
    date: "Oct 2024 - present",
    points: [
      "Developing and maintaining SaaS-based web applications using Angular and RESTful APIs.",
      "Building reusable, modular, and scalable UI components with Angular and TypeScript.",
      "Integrating third-party services and APIs to enhance SaaS product functionality.",
      "Managing application state and handling reactive programming using RxJS.",
      "Ensuring responsive design, accessibility, and cross-browser compatibility using Angular Material and modern CSS frameworks.",
    ],
  },

  {
    title: "Full-Stack Developer",
    company_name: "Team Seven Solution",
    icon: TeamSeven,
    iconBg: "#1d1836",
    date: "Jan 2023 - present",
    points: [
      "Building and maintaining scalable web applications using MEAN and MERN stacks (MongoDB, Express, Angular/React, Node.js).",
      "Integrating RESTful APIs and implementing efficient backend logic with Node.js and Express.",
      "Creating dynamic and responsive UI components using Angular and React.",
      "Managing application state and optimizing performance with tools like Redux and RxJS.",
      "Ensuring cross-browser compatibility and mobile responsiveness using modern CSS frameworks.", ,
    ],
  },

  {
    title: "Backend Developer",
    company_name: "Team Seven Solution",
    icon: TeamSeven,
    iconBg: "#1d1836",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining backend services using Node.js and Express.js with MongoDB integration.",
      "Collaborating with cross-functional teams to design and implement scalable RESTful APIs.",
      "Implementing backend logic, authentication, and data handling with secure and efficient practices.",
      "Participating in code reviews, focusing on backend performance, structure, and best practices.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Working with Muzamil was super smooth. He got our web dashboard running perfectly on both desktop and mobile and always delivered before deadline.",
    name: "Rachel Meyer",
    designation: "Operations Lead",
    company: "Clarity Tools",
    image: FirtstImage,
  },
  {
    testimonial:
      "We had an outdated portal, and Muzamil revamped it beautifully with modern Angular animations and quick APIs. Definitely saved us time and money.",
    name: "Danish Mehmood",
    designation: "Founder",
    company: "PakTech Solutions",
    image: secondImage,
  },
  {
    testimonial:
      "I’m not a tech person, but Muzamil broke down everything so clearly. He built our internal CRM, and it's now 10x easier to use. Highly recommend him.",
    name: "John Tylor",
    designation: "Office Manager",
    company: "BrightDesk Co.",
    image: ThirdImage,
  },
  {
    testimonial:
      "Our Angular frontend needed serious optimization. Muzamil cleaned up the codebase and improved loading time by over 60%. We’re super happy with the results.",
    name: "Sania Irfan",
    designation: "Product Designer",
    company: "InvoHub",
    image: ForthImage,
  },
  {
    testimonial:
      "As a startup, we needed someone flexible. Muzamil jumped in and owned the whole stack like a champ. From APIs to UI, he nailed it.",
    name: "Luis Hernandez",
    designation: "Co-founder",
    company: "StartupNest",
    image: SixthImage,
  },
  {
    testimonial:
      "Our clients love the new portal Muzamil built. He understood exactly what we wanted and even suggested smart improvements we hadn’t thought of.",
    name: "Arisha Khan",
    designation: "Client Success Manager",
    company: "FlowSpark",
    image: FifthImage,
  },
];

const projects = [
  {
    name: "RKMG Business",
    description:
      "RKMG Business is a platform that simplifies ecommerce with easy product search, seamless purchasing, and excellent customer support. Using advanced technology and intuitive design, it connects providers with consumers, driving growth and enhancing the shopping experience.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },

    ],
    image: Project1,
    source_code_link: "https://github.com/MalickMuzamil",
  },
  {
    name: "RIVIO",
    description:
      "RIVIO is a web-based platform designed to streamline tracking processes. It enables users to efficiently monitor activities, shipments, or tasks in real-time. With a user-friendly interface and advanced features, RIVIO ensures accurate and up-to-date information, helping businesses.",
    tags: [
      {
        name: "Mean Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML5",
        color: "white-text-gradient",
      },
    ],
    image: Project2,
    source_code_link: "https://github.com/MalickMuzamil",
  },
  {
    name: "IngleWood Coffee Roaster",
    description:
      "IngleWood Coffee is your ultimate destination for premium coffee beans and accessories. Whether you're a coffee enthusiast or a professional, explore a wide range of coffee seeds, roasters, and equipment to elevate your brewing experience all in one place at any time!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Project3,
    source_code_link: "https://github.com/MalickMuzamil",
  },
  {
    name: "Dealerheim",
    description:
      "Dealerheim is your ultimate destination for buying and selling premium cars. Whether you're a car enthusiast or a professional dealer, explore a wide range of vehicles, from luxury to everyday models, all in one place. Find your perfect ride or list your car for sale anytime, anywhere!",
    tags: [
      {
        name: "MERNStack",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Frontend Development",
        color: "blue-text-gradient",
      },

    ],
    image: Project4,
    source_code_link: "https://github.com/MalickMuzamil",
  },
  {
    name: "Car Detailing",
    description:
      "Car Detailing is a SAAS platform that streamlines the car detailing process. Whether you're a professional or an owner, access a range of services to maintain and improve your vehicle’s appearance, all in one place.",
    tags: [
      {
        name: "MEANStack",
        color: "blue-text-gradient",
      },
      {
        name: "SaaS Development",
        color: "white-text-gradient",
      },
      {
        name: "AngularJS",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: Project5,
    source_code_link: "https://github.com/MalickMuzamil",
  },
  {
    name: "EverGreen",
    description:
      "Evergreen is a modern web application built with Next.js, Tailwind CSS, and AOS (Animate On Scroll). It features smooth animations, responsive design, and real-time data handling that exports CSV files and updates a live Excel sheet.",
    tags: [
      {
        name: "SaaS Development",
        color: "white-text-gradient",
      },
      {
        name: "MERNStack",
        color: "blue-text-gradient",
      },
      {
        name: "NEXTJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExcelSheet",
        color: "green-text-gradient",
      },
      {
        name: "CSV",
        color: "white-text-gradient",
      },
      {
        name: "Frontend Development",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX Design",
        color: "pink-text-gradient",
      },
    ],
    image: Project6,
    source_code_link: "https://github.com/MalickMuzamil",
  },
];

export { services, technologies, experiences, testimonials, projects };
