import { SkillType, ProjectType, SocialLinkType } from '../types';

export const skills: SkillType[] = [
  { name: 'HTML5', icon: 'bx bxl-html5', percentage: 98 },
  { name: 'CSS3', icon: 'bx bxl-css3', percentage: 95 },
  { name: 'JAVASCRIPT', icon: 'bx bxl-javascript', percentage: 90 },
  { name: 'REACT.JS', icon: 'bx bxl-react', percentage: 80 },
  { name: 'GIT & GITHUB', icon: 'bx bxl-github', percentage: 90 },
  { name: 'SASS', icon: 'bx bxl-sass', percentage: 95 },
  { name: 'BOOTSTRAP', icon: 'bx bxl-bootstrap', percentage: 90 },
  { name: 'TAILWIND', icon: 'bx bxl-tailwind-css', percentage: 80 },
  { name: 'UX/UI', icon: 'bx bxs-paint', percentage: 100 },
  { name: 'FIGMA & PIXSO', icon: 'bx bxl-figma', percentage: 80 },
  { name: 'MYSQL', icon: 'bx bxs-data', percentage: 50 },
];

export const projects: ProjectType[] = [
  { 
    title: 'Project 1', 
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    link: '#' 
  },
  { 
    title: 'Project 2', 
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    link: '#' 
  },
  { 
    title: 'Project 3', 
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    link: '#' 
  },
  { 
    title: 'Project 4', 
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    link: '#' 
  },
  { 
    title: 'Project 5', 
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    link: '#' 
  },
  { 
    title: 'Project 6', 
    image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    link: '#' 
  },
];

export const socialLinks: SocialLinkType[] = [
  { 
    platform: 'LinkedIn', 
    icon: 'bx bxl-linkedin', 
    link: 'https://www.linkedin.com/in/naveen-raj-910a14218/',
    hoverColor: 'hover:text-blue-600'
  },
  { 
    platform: 'Instagram', 
    icon: 'bx bxl-instagram', 
    link: 'https://www.instagram.com/naveenraj767/',
    hoverColor: 'hover:text-pink-600'
  },
  { 
    platform: 'GitHub', 
    icon: 'bx bxl-github', 
    link: 'https://github.com/naveen-767',
    hoverColor: 'hover:text-gray-800 dark:hover:text-white'
  },
  { 
    platform: 'Facebook', 
    icon: 'bx bxl-facebook', 
    link: 'https://www.facebook.com/profile.php?id=100009760741593',
    hoverColor: 'hover:text-blue-700'
  },
  { 
    platform: 'WhatsApp', 
    icon: 'bx bxl-whatsapp', 
    link: 'https://wa.me/8072908442',
    hoverColor: 'hover:text-green-500'
  },
];