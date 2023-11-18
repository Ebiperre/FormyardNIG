import logo from '../assets/Logo.png';
import train1 from '../assets/portfolio/training1.jpg';
import train2 from '../assets/portfolio/training2.jpg';
import train3 from '../assets/portfolio/training3.jpg';

import up1 from '../assets/portfolio/7up2.webp';
// import up2 from '../assets/portfolio/7up5.webp';
import up3 from '../assets/portfolio/7up4.webp';

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
    stats: '100+',
    title: 'Projects Completed',
    description: 'Always building quality industries',
  },
  {
    stats: '95%',
    title: 'Satisfaction Rate',
    description: 'Best manufacturing service provider',
  },
  {
    stats: '200+',
    title: 'Satisfied Clients',
    description: 'Using the newest manufacturing tech',
  },
  {
    stats: '150+',
    title: 'Qualified Engineers',
    description: 'Experiences trusted contractor',
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
    image: train3,
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
    text: "Thanks for exceptional work on our downtown Minneapolis project, Formyard Ltd. Challenges met with professionalism and efficiency. Your team's proactive approach and viable solutions made the process smooth. From navigating downtown restrictions to managing a tight schedule, Formyard Ltd exceeded expectations. Looking forward to future collaborations!",
    name: 'Amelia Edwards',
    company: 'Google Inc',
  },
  {
    text: 'Formyard Ltd consistently meets tight timelines and budgets, showcasing professionalism and respect for our business. Your responsive, transparent communication, and commitment to honesty make Formyard Ltd a reliable and trustworthy partner. The values from your leadership extend throughout the company, making us feel like valued clients.',

    name: 'Darika Samak',
    company: 'Apple',
  },
  {
    text: "Formyard Ltd's professionals let me focus on behind-the-scenes tasks. Expertise, commitment, and skilled craftsmen, coupled with short notice flexibility, ease project management stress. Remarkable attention to detail and positive on-site feedback from our team characterize Formyard Ltd. Thanks for making project coordination seamless.",
    name: 'Darika Samak',
    company: 'Microsoft',
  },
];

// FOOTER
export const FOOTER_LINKS = [
  {
    title: 'Portfolio',
    key: 'portfolio',
    href: '/portfolio',
    links: [
      'Lekki Blue waters',
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
    { label: 'Support team', value: '0813 860 5060' },
    { label: 'Email', value: 'Kevork@formyardnig.com.' },
  ],
};
