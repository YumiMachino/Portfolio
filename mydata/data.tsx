import { IconType } from 'react-icons';
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
  FaSwift,
  FaJava,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiJquery,
  SiMaterialui,
  SiTailwindcss,
  SiFirebase,
} from 'react-icons/si';

type myDataType = {
  self_intro: string;
  skills: [
    {
      name: string;
      icon: IconType;
    }
  ];
};

// Data for About page
export const myData: myDataType = {
  self_intro:
    'I am a Front-End Developer with a passion for user experience and interaction design, and strength in creative and strategic thinking. Learning and growing as a software developer is my passion. I have learnt Front-End development as well as iOS app development, throughout school projects and volunteer work, I have always enjoyed working in a team, also love taking new challenges. My motto is to have fun learning! ',
  skills: [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Sass',
      icon: <FaSass />,
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap />,
    },
    {
      name: 'jQuery',
      icon: <SiJquery />,
    },
    {
      name: 'Material UI',
      icon: <SiMaterialui />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Swift',
      icon: <FaSwift />,
    },

    {
      name: 'Java',
      icon: <FaJava />,
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
    },
    {
      name: 'Firebase',
      icon: <SiFirebase />,
    },
    {
      name: 'Github',
      icon: <FaGithub />,
    },
  ],
};

type ProjectDataType = {
  id: number;
  title: string;
  thumbnail: string;
  technology: {
    id: number;
    tech: string;
  }[];
  web: boolean;
  about: string;
  design?: null | any;
  live?: null | string;
  repo?: null | string;
}[];

// Data for Project page
export const myProjects: ProjectDataType = [
  {
    id: 0,
    title: 'DPCODE ACADEMY',
    thumbnail: '/dpcodeAcademy.jpg',
    technology: [
      {
        id: 10,
        tech: 'Next.js',
      },
      {
        id: 20,
        tech: 'Material UI',
      },
      {
        id: 30,
        tech: 'Storybook',
      },
    ],
    web: true,
    about:
      'A website created for DPCode Academy which offers users to access to the online learning platform. On the website, users can login so that they are able to see the limited resources either for students or admin. This project has been developed by a team involving UI/UX designers, Front End Developers and Back End Developers.',
    design: null,
    live: 'https://dpcode.academy/',
    repo: null,
  },
  {
    id: 1,
    title: 'RecipeBook(Dev)',
    thumbnail: '/recipeBook.png',
    technology: [
      {
        id: 11,
        tech: 'React',
      },
      {
        id: 21,
        tech: 'TypeScript',
      },
      {
        id: 31,
        tech: 'tailwindCSS',
      },
      {
        id: 41,
        tech: 'Firebase',
      },
      {
        id: 42,
        tech: 'Figma',
      },
    ],
    web: true,
    about:
      'DEVELOPMENT ONGOING. A Web Application that let users share their unique recipes with others and see recipes from all over the world. Users can save favorite recipes, and try cooking multi-national recipes, and comment on that recipes! This project has been developed with another developer. I have created UI design from the scratch. ',
    design: [
      ['#A8763E', '#F7F3E3', '#4F2D07', '#E8CAA9'],
      ['Poppins', 'Mulish'],
    ],
    live: null,
    repo: 'https://github.com/YumiMachino/recipe-book',
  },
  {
    id: 2,
    title: 'My Portfolio',
    thumbnail: '/updatePortfolio.png',
    technology: [
      {
        id: 21,
        tech: 'Next.js',
      },
      { id: 22, tech: 'TypeScript' },
      { id: 23, tech: 'Sass' },
      { id: 24, tech: 'Figma' },
    ],
    web: true,
    about:
      'My portfolio website, which shows about myself, projects, and contact information. For this website, I wanted to develop something unique, so I started from UI design.  I decided to use Sass in order to have more flexibility on CSS, and broke them into smaller files to make the file structure more simple. All the data is separated from UI components so that it is easier to update later.',
    design: [
      ['#16063c', '#f100f5', '#450eff', '#3b136b'],
      ['Orbitron', 'Tomorrow'],
    ],
    live: 'https://www.yumimachino.tech/',
    repo: 'https://github.com/YumiMachino/Portfolio-nextJS',
  },
  {
    id: 3,
    title: 'Country Journal',
    thumbnail: '/countryJournal.png',
    technology: [
      { id: 31, tech: 'HTML' },
      { id: 32, tech: 'CSS' },
      { id: 33, tech: 'JavaScipt' },
      { id: 34, tech: 'Webpack' },
      { id: 35, tech: 'Figma' },
    ],
    web: true,
    about:
      'A website that lets users check overview information of all the countries including country flag, common name, languages and population. Additionally, for those who likes to go travelling, they can create journals per country. They can be edited, or deleted later. Users can see all the countries they have been to, and all the journals they wrote at a glance. ',
    design: [
      ['#395380', '#F6E8C9', '#BFCC85', '#464646'],
      ['Josefin Sans', 'Montserrat Alternates'],
    ],
    live: 'https://yumimachino.github.io/country-journal-app/',
    repo: 'https://github.com/YumiMachino/country-journal-app',
  },
  {
    id: 4,
    title: 'JTravel Tour',
    thumbnail: '/jTravel.png',
    technology: [
      { id: 41, tech: 'HTML' },
      { id: 42, tech: 'Sass' },
      { id: 43, tech: 'JavaScript' },
    ],
    web: true,
    about:
      'A demonstration website for a travel agency which features Japan. I created this website to brush up my front end skills using HTML, Sass and JavaScript, and also including design. For development, I used Sass to break down style files to smaller components considering readability and maintainability. For the motion of card flow, I used swiper.js. For testimonials and FAQ, they are created by pure JavaScript. ',
    design: [
      ['#8D0801', '#66666E', '#E6E6E9', '#000000'],
      ['Bodoni Moda', 'Lato'],
    ],
    live: 'https://yumimachino.github.io/jtravel-tour/',
    repo: 'https://github.com/YumiMachino/jtravel-tour',
  },
  {
    id: 5,
    title: 'BlackJack',
    thumbnail: '/blackJack.jpg',
    technology: [
      { id: 51, tech: 'JAVA' },
      { id: 52, tech: 'JAVAFX' },
    ],
    web: true,
    about:
      'A website that lets users play a card game called "BlackJack". The rule of this game is simple, whoever holds the cards with the sum of 21 wins, and whoever holds cards with the sum of more than 21 is busted. Each game will be conducted by a dealer and 2 players. This was developed with other developers according to MVC patterns. I took part of the game logic, I was able to learn how to make logic out of game rules.',
    design: null,
    live: null,
    repo: 'https://github.com/YumiMachino/Black-Jack',
  },
  {
    id: 6,
    title: 'HangOut Planner',
    thumbnail: '/hangOutPlanner.jpg',
    technology: [
      { id: 61, tech: 'Swift' },
      { id: 62, tech: 'REST API' },
    ],
    web: false,
    about:
      'A native iOS app developed by Swift. This app suggests optimized roots to the destination of the category user picks from users current location. This app uses modern collection views with diffable data source, async API-fetch with dispatch group. The project was developed by a team of developers according to agile project management. I developed parts of front end, also implemented API fetching.',
    design: null,
    live: null,
    repo: 'https://github.com/cookie777/Hang-Out-Planner',
  },
  {
    id: 7,
    title: 'To Do List App',
    thumbnail: '/toDoList.jpeg',
    technology: [
      { id: 71, tech: 'Swift' },
      { id: 72, tech: 'CoreData' },
    ],
    web: false,
    about:
      'A native iOS app developed by Swift. This let users create, add, update and delete to do items. By using Core data, this app allows data to be persistent.',
    design: null,
    live: null,
    repo: 'https://github.com/YumiMachino/CoreData_ToDoList',
  },
  {
    id: 8,
    title: 'crwn-clothing',
    thumbnail: '/crwnClothing.png',
    technology: [
      { id: 81, tech: 'React' },
      { id: 82, tech: 'Redux' },
      { id: 83, tech: 'Firebase' },
    ],
    web: true,
    about: 'Tutorial based web application which features e-commerce website.',
    design: null,
    live: 'https://crwn-clothing-tutorial-live.herokuapp.com/',
    repo: 'https://github.com/YumiMachino/crwn-clothing/tree/main/src',
  },
];
