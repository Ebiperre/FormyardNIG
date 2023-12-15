import logo from '../assets/Logo.png';
import train1 from '../assets/portfolio/training1.jpg';
import train2 from '../assets/portfolio/training2.jpg';
import train3 from '../assets/portfolio/training3.jpg';


//testimonial images

import test1 from '../assets/brands/test1 (2).jpg';
import test2 from '../assets/brands/test2 (1).jpg';
import test3 from '../assets/brands/test3 (1).jpg';

import image2 from '../assets/image2.jpg';

import up1 from '../assets/portfolio/7up2.webp';
// import up2 from '../assets/portfolio/7up5.webp';
import up3 from '../assets/portfolio/7up4.webp';
import Brands from '../components/brands';



// Brands
import brand1 from '../assets/brands/eko-dev-logo.png';
import brand2 from '../assets/brands/hi_tech-logo.jpeg';
import brand3 from '../assets/brands/south_energy_logo-removebg-preview.png';
import brand4 from '../assets/brands/megastar.png';
import brand5 from '../assets/brands/eko.png';

//NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', labrl: 'img={logo}' },
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/portfolio', key: 'portfolio', label: 'Portfolio' },
  { href: '/contact', key: 'contact', label: 'Contact' },
];

//FEATURES
export const FEATURES = [
  {
    stats: '200+',
    title: 'Projects Completed ',
    description: 'In Nigeria and West Africa',
  },
  {
    stats: '95%',
    title: 'Satisfaction Rate',
    description: 'All round formwork material and service provider',
  },
  {
    stats: '100+',
    title: 'Satisfied Clients',
    description: '100+ clients choose our excellence and reliability',
  },
  {
    stats: '150+',
    title: 'Trained Capenters & Engineers',
    description: 'Skilled carpenters and engineers ready for your projects',
  },
];

//SERVICES
export const SERVICES = [
  {
    heading: 'Proven Track Record',
    title: 'We have a decade of successful projects.',
    color: '#FFF3E3;',
  },
  {
    heading: 'Quality Assurance',
    title: 'Meticulous attention to details.',
    color: '#EAF3F5;',
  },
  {
    heading: 'Client-Centric Approach',
    title: 'Effective, transparent, and collaborative.',
    color: '#EAF3F5;',
  },
];

//SOLUTIONS
export const SOLUTIONS = [
  {
    heading: 'Engineering Services',
    title: 'Transforming Visions into Reality with Cutting-edge Services',
    image: up1,
  },
  {
    heading: 'Formwork Instructor',
    title: 'Expert Guidance for Precision Engineering at Your Fingertips',
    image: image2,
  },
  {
    heading: 'Reconditioning Services',
    title:
      'Revitalize, Reinvent, Renew: Unmatched Reconditioning Services for Engineering Excellence',
    image: up3,
  },
];

//CLIENTS
export const CLIENTS = [
  {
    text: 
    "Exceptional work on our Minneapolis project, with Formyard Ltd. Challenges met with professionalism. Proactive solutions made the process smooth. Formyard Ltd exceeded expectations. Looking forward to future collaborations!",
    name: 'Azuri Towers',
    // company: 'Google Inc',
    image: brand1,
  },
  {
    text: 
    "Formyard Ltd consistently delivers within timelines and budgets, demonstrating professionalism and transparency. Your commitment to honesty and values from leadership make Formyard Ltd a reliable and valued partner.",

    name: 'South energy',
    // company: 'Apple',
    image: brand3,
  },
  {
    text: 
    "They excels in behind-the-scenes tasks. Expertise, commitment, and skilled craftsmen, with short notice flexibility, alleviate project management stress. Remarkable attention to detail and positive on-site feedback make Formyard Ltd a trusted partner.",
    name: 'Mega Star',
    // company: 'Microsoft',
    image: brand4,
  },
];

// FOOTER
export const FOOTER_LINKS = [
  {
    title: 'Portfolio',
    key: 'portfolio',
    href: '/portfolio',
    links: [
      'Project Reference',
      'Formyard Training Program',
      'Service Assembly',
    ],
  },
  {
    title: 'About',
    key: 'about',
    href: '/about',
    links: ['Our Vision', 'Our Mission'],
  },
  {
    title: 'Help',
    key: 'contact',
    href: '/contact',
    links: ['Contact Us', 'FAQ'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Support team', value: '+234(0) 813 860 5060' },
    { label: 'Email', value: 'Kevork@formyardnig.com' },
  ],
};
