import { meta, shopify, starbucks, tesla, lexaeon, daisyman, gourmet, recipefinder, liftedlisted, taskly, aroundtheflag, blog1, blog2, bazzarBuddy } from "../assets/images";
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
    django,
    leetcode,
    codechef,
    codeforces,
    icpc1,
    icpc2,
} from "../assets/icons";
import { Example } from "@react-three/drei";

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

export const blogs = [
  {
    title: 'DSA before Development or Development before DSA?',
    image: blog1,
    author: 'MD. Tahsin Ferdous',
    publishDate: '09-07-2024',
    description: `I was speaking to one of my developer friends the other day. Suddenly, a topic came up: The question that we discussed for a while was 'Should we learn Data Structures and Algorithms (DSA) first before jumping to development or the other way around?' I attempted to persuade him out of it explaining the importance of mastering DSA.....`,
    blogLink: 'https://medium.com/@tahsin.ferdous3546/dsa-before-development-or-development-before-dsa-c2e7ec08fcc8'
  },
  {
    title: 'Big O Notation and the Climb Over Constants.',
    image: blog2,
    author: 'MD. Tahsin Ferdous',
    publishDate: '01-09-2024',
    description: 'I was recently going through the implementations and complexities of common sorting algorithms such as Quicksort and Mergesort. I noticed that many programmers, including myself, often ignore the constant factors when calculating time complexity. This is typically acceptable for a high-level analysis, but there are situations where this oversight can lead to .....',
    blogLink: 'https://medium.com/@tahsin.ferdous3546/big-o-notation-and-the-climb-over-constants-7b2b84272d07'
  },
]

export const competitive = [
  {
    title: "ICPC",
    logo: icpc2,
    rank: "Represented City University Bangladesh in the prestigious ICPC regional competition.",
    iconBg: "#ffffff",
    profileName: ' ICPC Dhaka Regional - 2024 ',
    textColor: '',
    date: "October 2024 - October 2024",
  },
  {
    title: "Codeforces",
    logo: codeforces,
    rank: "Pupil",
    iconBg: "#ffffff",
    profileName: ' tahsin_ferdous ',
    textColor: 'green-500',
    date: "October 2024 - October 2024",
  },
  {
    title: "Codechef",
    logo: codechef,
    rank: "3 Star",
    iconBg: "#ffffff",
    profileName: ' tahsinferdous3 ',
    textColor: 'blue-600',
    date: "October 2024 - October 2024",
  },
  {
    title: "Leetcode",
    logo: leetcode,
    rank: "top 51.81%",
    iconBg: "#ffffff",
    profileName: ' MD_Tahsin_Ferdous ',
    textColor: 'yellow-600',
    date: "October 2024 - October 2024",
  },
]

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
    },
    {
        name: 'Codeforces',
        iconUrl: codeforces,
        link: 'https://codeforces.com/profile/tahsin_ferdous',
    },
    {
        name: 'Codechef',
        iconUrl: codechef,
        link: 'https://www.codechef.com/users/tahsinferdous3',
    },
    {
        name: 'Leetcode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/user1674jI/',
    },
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
      name: "Bazzar Buddy",
      description:
        "Bazzar Buddy: Buy and sell easily. List, manage, edit, or delete items. Track your transactions, sales, and update your account. Secure email verification ensures safety.",
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
      image: bazzarBuddy,
      live_link: "https://bazzar-buddy.vercel.app/",
      source_code_link: "https://github.com/Tahsin005/BazzarBuddy",
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