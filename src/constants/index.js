
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
    description: `
      RKMG Business is an innovative e-commerce platform tailored for modern businesses and consumers looking for a seamless, fast, and intuitive shopping experience. The platform integrates powerful product search algorithms allowing users to easily discover exactly what they need, even within extensive catalogs. With dynamic filtering, real-time search suggestions, and product previews, the user journey is both swift and enjoyable.

      RKMG also offers a streamlined purchasing workflow — from adding to cart, to secure checkout, and smart delivery tracking, every step is built for efficiency. It incorporates secure payment gateways, automated invoicing, and responsive order support, all of which are accessible on desktop or mobile.

      Behind the scenes, RKMG leverages HTML5 and Bootstrap for a visually appealing, responsive interface, while React ensures lightning-fast interactions and dynamic content rendering. The UI/UX design was developed with accessibility and clarity in mind, minimizing user friction and maximizing conversion rates.

      Admin and vendor dashboards offer in-depth insights — including sales analytics, inventory management, customer engagement tools, and promotional campaign managers. Everything is designed to help business owners thrive in the competitive digital landscape.

      RKMG is more than a shopping website — it’s an ecosystem for scaling commerce, building brand loyalty, and creating exceptional customer experiences.
`
    ,
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
    description: `
    RIVIO is a comprehensive, web-based tracking platform purpose-built for organizations that need precision and control over their workflow logistics. Whether you’re managing a warehouse, coordinating deliveries, or tracking high-priority shipments, RIVIO provides a centralized solution for seamless task visibility and control.

    The system employs real-time data synchronization across devices, giving users the ability to monitor, assign, and update tasks as they happen. With a modular architecture based on the MEAN stack (MongoDB, Express.js, Angular, Node.js), RIVIO is highly scalable and ideal for both small teams and enterprise operations.

    It supports automated alerts, analytics dashboards, location tracking, and role-based access — making it secure and efficient. Angular’s component-based UI gives users a fluid experience, with no page reloads, and interactive visualization of timelines, progress bars, and maps.

    RIVIO also integrates with third-party APIs such as shipping couriers, IoT sensors, and enterprise resource planning tools. The platform is mobile-optimized and works offline-first in critical areas.

    In sum, RIVIO is not just a tracker — it’s a smart assistant for operations that demand clarity, speed, and reliability.
`
    ,
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
    description: `
      IngleWood Coffee Roaster is an elegant online platform for coffee lovers and professionals to explore and purchase a curated selection of coffee beans, roasters, brewing tools, and accessories. With a user-friendly interface built in React, and powerful backend powered by Node, Express, and MongoDB, the application delivers a premium digital experience.

      The platform showcases a blend of storytelling and e-commerce, with product pages featuring roasting profiles, origin stories, grind options, and brewing tips. Users can search and filter by flavor notes, region, roast level, and caffeine content.

      It also includes a subscription model allowing customers to receive curated beans monthly, adjusted based on their taste preferences using a built-in quiz flow.

      From an admin perspective, store owners can manage inventory, monitor trends, and communicate promotions directly via the dashboard. The platform also uses analytics to track conversion rates, customer retention, and cart abandonment.

      IngleWood isn’t just a store; it’s a digital extension of the coffee culture.
      `
    ,
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
    description: `
      Dealerheim is an advanced automobile marketplace that brings both car dealers and individual customers together onto a seamless and highly customizable platform. Built using the MERN stack, it ensures optimal performance, scalability, and flexibility.

      Users can browse, compare, and filter a wide variety of vehicles — ranging from luxury brands to budget-friendly daily drivers. Real-time search, saved wishlists, and side-by-side vehicle comparisons enhance the shopping experience.

      Listings include 360-degree images, video walkthroughs, vehicle history reports, and EMI calculators. Authenticated users can post listings with ease, edit prices, or respond to inquiries — all from a responsive dashboard interface.

      Dealerheim supports a review system, favoriting, chat-based negotiation, and multi-language support. The site is mobile-optimized and includes dealer analytics like traffic sources, listing performance, and pricing suggestions based on market data.

      For car enthusiasts and serious sellers alike, Dealerheim is a modern, professional-grade marketplace that redefines digital auto sales.
      `
    ,
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
        color: "white-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },

    ],
    image: Project4,
    source_code_link: "https://github.com/MalickMuzamil",
  },
  {
    name: "Car Detailing",
    description: `
    Car Detailing is a SaaS platform designed to modernize the auto-detailing industry. Whether you're an individual looking to book a detailing service or a professional detailing business managing multiple clients, this application covers it all.

    Built with Angular and Node.js, Car Detailing offers users a beautiful and snappy interface. Features include location-based booking, service customization (interior, exterior, ceramic coating, etc.), appointment management, and automated reminders.

    Professionals can create service packages, assign technicians, and generate real-time invoices. Each job can include before-and-after images, notes, and checklists — all accessible via the client portal.

    The admin panel is loaded with analytics tools such as monthly revenue, top customers, most requested services, and technician performance. Businesses can also send promotional emails, offer loyalty programs, and manage multiple locations.

    With role-based access, secure logins, and cloud backup, the platform ensures both security and performance — making it the go-to SaaS for detailing pros.
    `
    ,
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
    description: `
    EverGreen is a powerful, responsive SaaS dashboard designed with sustainability and modern development practices in mind. Built using Next.js and Tailwind CSS, it offers smooth transitions and animations powered by AOS (Animate On Scroll).

    EverGreen allows users to manage and visualize real-time data from various sources. Its standout feature is the ability to export data into CSV format and simultaneously sync it with a live Excel sheet via integrated APIs. This is ideal for businesses and research teams that require live reporting and downloadable datasets.

    The dashboard features interactive graphs, progress indicators, smart filtering, and user-level customization. With a keen focus on UI/UX, it uses clean typography, intuitive layouts, and dark/light mode switching.

    Use-cases include energy consumption tracking, team productivity reporting, customer behavior insights, and more. The app supports JWT-based auth, API middleware, and SSG/SSR capabilities for performance.

    EverGreen is more than a dashboard — it's a data-driven operating center for teams that think green and act fast.
    `
    ,
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
