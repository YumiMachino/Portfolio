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

// Data for About page
export const myData = {
  self_intro:
    "I'm a motivated front-end developer with passion for user experience and interaction design and strength in creative and strategic thinking. Learning and growing as a software developer is my passion. I've learnt front-end development as well as iOS App development, throughout school projects and volunteer work, I've always enjoyed working in a team, also love taking new challenges. My motto is to have fun learning! ",
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

// Data for Project page
export const myProjects = [
  {
    id: 0,
    title: 'DPCODE ACADEMY',
    thumbnail: '/dpcodeAcademy.jpg',
    technology: [
      {
        id: 10,
        tech: 'NEXTJS',
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
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    design: null,
    live: 'https://dpcode.academy/',
    repo: null,
  },
  {
    id: 1,
    title: 'RecipeBook Web App',
    thumbnail: '/dpcodeAcademy.jpg',
    technology: [
      {
        id: 11,
        tech: 'React',
      },
      {
        id: 21,
        tech: 'tailwindCSS',
      },
      {
        id: 31,
        tech: 'Firebase',
      },
    ],
    web: true,
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    design: [
      ['#A8763E', '#F7F3E3', '#4F2D07', '#E8CAA9'],
      ['Poppins', 'Mulish'],
    ],
    live: '',
    repo: 'https://github.com/YumiMachino/recipe-book',
  },
  {
    id: 2,
    title: 'Portfolio website',
    thumbnail: '/portfolio.jpg',
    technology: [
      {
        id: 21,
        tech: 'NEXTJS',
      },
      { id: 22, tech: 'SCSS' },
    ],
    web: true,
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    design: [
      ['#A8763E', '#F7F3E3', '#4F2D07', '#E8CAA9'],
      ['Poppins', 'Mulish'],
    ],
    live: '',
    repo: '',
  },
  {
    id: 3,
    title: 'Country Journal Web App',
    thumbnail: '/dpcodeAcademy.jpg',
    technology: [
      { id: 31, tech: 'HTML' },
      { id: 32, tech: 'CSS' },
      { id: 33, tech: 'JS' },
      { id: 34, tech: 'Webpack' },
    ],
    web: true,
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    design: [
      ['#A8763E', '#F7F3E3', '#4F2D07', '#E8CAA9'],
      ['Poppins', 'Mulish'],
    ],
    live: '',
    repo: '',
  },
  {
    id: 4,
    title: 'JTravel Tour Website',
    thumbnail: '/dpcodeAcademy.jpg',
    technology: [
      { id: 41, tech: 'HTML' },
      { id: 42, tech: 'SCSS' },
      { id: 43, tech: 'JS' },
    ],
    web: true,
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    design: [
      ['#A8763E', '#F7F3E3', '#4F2D07', '#E8CAA9'],
      ['Poppins', 'Mulish'],
    ],
    live: '',
    repo: '',
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
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    repo: '',
    design: null,
    live: null,
  },
  {
    id: 6,
    title: 'HangOut Planner App',
    thumbnail: '/hangOutPlanner.jpg',
    technology: [
      { id: 61, tech: 'Swift' },
      { id: 62, tech: 'REST API' },
    ],
    web: false,
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    repo: '',
    design: null,
    live: null,
  },
  {
    id: 7,
    title: 'React Redux movie app',
    thumbnail: '/dpcodeAcademy.jpg',
    technology: [
      { id: 71, tech: 'React' },
      { id: 72, tech: 'Redux' },
      { id: 73, tech: 'Redux Toolkit' },
    ],
    web: true,
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque quaerat voluptas perspiciatis omnis autem dolore dolorem porro architecto aperiam.',
    live: '',
    repo: '',
    design: null,
  },
];
