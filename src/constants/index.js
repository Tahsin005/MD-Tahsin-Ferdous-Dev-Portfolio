import { meta, shopify, starbucks, tesla, lexaeon, daisyman, gourmet, recipefinder, liftedlisted, taskly, aroundtheflag } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    c,
    cpp,
    python,
    postgres,
    mysql,
    django
} from "../assets/icons";

export const skills = [

    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Python Developer",
        company_name: "Lexaeon",
        icon: lexaeon,
        iconBg: "#accbe1",
        date: "October 2024 - October 2024",
        points: [
            "Developed and optimized backend systems using Python and Django, ensuring scalability and efficient performance for web applications.",
            "Collaborated with a cross-functional team to design and implement RESTful APIs for seamless data integration and interaction.",
            "Enhanced database structures with PostgreSQL, streamlining queries to improve application response times.",
            "Wrote modular, reusable code and conducted rigorous testing to minimize bugs and ensure high-quality software delivery.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Tahsin005',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/md-tahsin-ferdous/',
    }
];

export const projects = [
    {
      name: "Daisy Man",
      description:
        "This front-end project focuses on practicing responsive layout design using Tailwind CSS and DaisyUI, showcasing utility-first styling for clean, adaptable designs.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: daisyman,
      live_link: "https://daisy-man.vercel.app/",
      source_code_link: "https://github.com/Tahsin005/DaisyMan",
    },
    {
      name: "Gourmet Haven",
      description:
        "This is a simple multipage restaurant management system design using HTML, CSS, Tailwind CSS and some JavaScript for scrolling functionality.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gourmet,
      live_link: "https://gourmet-haven-eight.vercel.app/",
      source_code_link: "https://github.com/Tahsin005/Gourmet-Haven",
    },
    {
      name: "Recipe Finder",
      description:
        "This is a recipe finder website built using the classic 'Meal DB' API, designed to help users explore, discover, and learn about a variety of meal options effortlessly.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: recipefinder,
      live_link: "https://recipe-app-gamma-virid.vercel.app/",
      source_code_link: "https://github.com/Tahsin005/Recipe-App",
    },
    {
      name: "Lifted & Listed",
      description:
        "Lifted & Listed: Buy and sell easily. List, manage, edit, or delete items. Connect with buyers, track sales, and update your account. Secure email verification ensures safety.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "drf",
          color: "pink-text-gradient",
        },
      ],
      image: liftedlisted,
      live_link: "https://lifted-and-listed.netlify.app/",
      source_code_link: "https://github.com/Tahsin005/Lifted-Listed-Frontend",
    },
    {
      name: "Taskly",
      description:
        "Taskly, a task management application that allows users to add, edit, and delete tasks in a secured way, helping them stay organized and productive.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "drf",
          color: "pink-text-gradient",
        },
      ],
      image: taskly,
      live_link: "https://taskly-blue.vercel.app/",
      source_code_link: "https://github.com/Tahsin005/Taskly-Frontend",
    },
    {
      name: "Around The Flag",
      description:
        "Rest Countries API Project This project is a React.js application that utilizes the Rest Countries API to display information about all the countries in the world.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "country rest api",
          color: "pink-text-gradient",
        },
      ],
      image: aroundtheflag,
      live_link: "https://country-rest-api-react.vercel.app/",
      source_code_link: "https://github.com/Tahsin005/Country-Rest-API---React",
    },
  ];