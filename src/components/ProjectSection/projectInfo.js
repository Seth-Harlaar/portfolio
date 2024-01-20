// images
import browsPicture from '../../assets/images/project_pics/custom_browser/main.png';
import browsPicture2 from '../../assets/images/project_pics/custom_browser/old.png';
import navPic from '../../assets/images/project_pics/fancy_nav/nav_home.png';
import navPic2 from '../../assets/images/project_pics/fancy_nav/nav_nav.png';
import connectPic from '../../assets/images/project_pics/connect_appliance/hero.PNG';
import connectPic2 from '../../assets/images/project_pics/connect_appliance/port.PNG';
import connectPic3 from '../../assets/images/project_pics/connect_appliance/brands.PNG';


// icons
import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiReact } from 'react-icons/di';

const browsPics = [
  browsPicture,
  browsPicture2
];

const navPics = [
  navPic,
  navPic2
];

const connectPics = [
  connectPic,
  connectPic2,
  connectPic3
]

export const customHomepageInfo = {
  'shortTitle': 'Custom Homepage',
  'title': 'Custom Browser Homepage',
  'pictures': browsPics,
  'description': 'This project was built using React.js, Tailwind CSS, Node.js, and JavaScript. It features a clock with the time and date, local weather data, custom bookmarks, and a search bar with multiple search engine options.',
  'skills': ['Weather API', 'Date objects'],
  'icons': [
    {'title': 'React.js', 'name': DiReact },
    {'title': 'HTML5', 'name': AiFillHtml5 },
    {'title': 'Tailwind CSS', 'name': SiTailwindcss },
    {'title': 'Node.js', 'name': FaNodeJs },
  ],
  'link': 'https://browser-host.github.io/homepage-clock/',
}

export const fancyNavInfo = {
  'shortTitle': 'Nav App',
  'title': 'Fancy Navigation App',
  'pictures': navPics,
  'description': 'This was a small project I setup to practice using Tailwind CSS to style websites. I found an interesting navigation menu I liked and decided to replicate it.',
  'skills': ['Animation'],
  'icons': [
    {'title': 'React.js', 'name': DiReact },
    {'title': 'HTML5', 'name': AiFillHtml5 },
    {'title': 'Node.js', 'name': FaNodeJs },
  ],
  'link': 'https://seth-harlaar.github.io/Fancy-Nav/',
}

export const connectApplianceInfo = {
  'shortTitle': 'Connect Appliance',
  'title': 'Website for CONNECT Appliance Inc.',
  'pictures': connectPics,
  'description': 'In this project, I developed a fully custom website for CONNECT Appliance Inc. It allows them to have a greater online presence and facilitates communication from new clients.',
  'skills': ['React-router', 'Image slider animations', 'EmailJS API', 'Custom Provider Components'],
  'icons': [
    {'title': 'React.js', 'name': DiReact },
    {'title': 'HTML5', 'name': AiFillHtml5 },
    {'title': 'Tailwind CSS', 'name': SiTailwindcss },
    {'title': 'Node.js', 'name': FaNodeJs },
  ],
  'link': 'https://connect-appliance-host.github.io/website/'
}

const projectList = [
  customHomepageInfo,
  fancyNavInfo,
  connectApplianceInfo
]

export default projectList;