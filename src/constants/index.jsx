import logo from '../assets/Logo.png';


//NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', labrl: "img={logo}" },
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
        heading: "Design and Planning Services", 
        title: "Our expert design and planning services ensure meticulous execution" 
    },
    { 
        heading: "Construction and Building", 
        title: "From groundbreaking to finishing touches, we bring your vision to life with precision." 
    },
    { 
        heading: "Renovation and Remodeling", 
        title: "Enhance existing spaces or rejuvenate structure with tailored solutions" 
    },
];

//CLIENTS
export const CLIENTS = [
    {
        text: 'Et vim graeco principes. Cu dico nullam pri stet possim quaerendum invenire platonem animal assentior nam.',
        name: 'Amelia Edwards',
        company: 'Google Inc',
      },
      {
        text: 'Nam natum volutpat eu. Natum elitr vel te. Id qui purto dicit, bonorum minimum et sit assum tation homero.',
        name: 'Darika Samak',
        company: 'Apple',
      },
      {
        text: 'Et vim graeco principes. Cu dico nullam pri stet possim quaerendum invenire platonem animal assentior nam.',
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
            'Service Assembly'
        ],
    },
    {
        title: 'About',
        key: 'about',
        href: '/about',
        links: [
            'Our Vision',
            'Our Mission'
        ],
    },
    {
        title: 'Help',
        key: 'contact',
        href: '/contact',
        links: [
            'Contact Us',
            'FAQ'
        ],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        {label: 'Support team', value: '+2348037079584'},
        {label: 'Email', value: 'info@crewtechng.com.'}
    ],
};