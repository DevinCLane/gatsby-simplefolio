import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Devin Lane', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my web portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Devin Lane.',
  subtitle:
    'I nurture creativity in systems, teams, and individuals. I craft music and audio, I write, and I teach.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'devin-lane-avatar.jpg',
  paragraphOne:
    "I'm a creative manager, producer, musician, and educator with 10+ years experience. I define and lead the development of creative teams, successful educational programs, and high-impact multimedia projects using the latest technologies.",
  paragraphTwo:
    "I have strong communication, writing, and storytelling skills. I nurture and cultivate fruitful, diverse, and healthy professional networks. I'm fluent in Spanish with extensive experience in Latin America.",
  paragraphThree:
    "I have a deep understanding of music/audio production/editing and writing/content strategy. I excel in Logic Pro X, Garageband, Pro Tools, Max/MSP, etc. I'm proficient in all modern creative tools, as well as HTML/CSS/JavaScript. I am passionate about learning and education.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Lightning-lessons-logo',
    title: 'Founder and Teacher at Lightning Lessons',
    info:
      'Since 2007, I have run a small business teaching private music lessons and ensembles with a select group of students. In 2020, I rebranded as Lightning Lessons to reflect the growth of the business.',
    info2: '',
    url: 'https://www.lightninglessons.com/',
    repo: 'https://github.com/DevinCLane/Lightning-Lessons-v2', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ClimateMusic-Logo-blue.png',
    title: 'Artist Engagement Manager at Climate Music Project',
    info:
      "Since 2020, I've helped to develop and scale strategic methodologies in close collaboration with the executive team to improve artist and scientist communications, expanding the creation of scientifically-faithful music that spurs public action on the climate crisis. I write, edit, produce, and advise on systems, documents, slide decks, websites, videos, scripts, animations, and audio examples. I consult, research, and report on projects for increased public engagement and new artist outreach. I am the point person for internally orienting and onboarding new artist collaborators.",
    info2: '',
    url: 'https://climatemusic.org/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Tenderloin-Guitarist.jpg',
    title: 'Up On Top',
    info:
      "Since 2014, I have collaborated with Blue Bear School of Music's Outreach Director to develop and lead a grant-funded after-school program for youth in San Francisco's Tenderloin neighborhood.",
    info2: '',
    url: 'https://www.upontop.org/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Tenderloin-Guitarist.jpg',
    title: 'Up On Top',
    info:
      "Since 2014, I have collaborated with Blue Bear School of Music's Outreach Director to develop and lead a grant-funded after-school program for youth in San Francisco's Tenderloin neighborhood.",
    info2: '',
    url: 'https://www.upontop.org/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch',
  btn: '',
  email: 'https://aemail.com/jR0R',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
