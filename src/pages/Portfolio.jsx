import portfolio from '../assets/portfolio.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


//training
import train1 from '../assets/portfolio/training1.jpg';
import train2 from '../assets/portfolio/training2.jpg';
import train3 from '../assets/portfolio/training3.jpg';
import train4 from '../assets/portfolio/training4.jpg';
import train5 from '../assets/portfolio/training5.jpg';

//7up

import up1 from '../assets/portfolio/7up.webp';
import up2 from '../assets/portfolio/7up2.webp';
import up3 from '../assets/portfolio/7up3.webp';
import up4 from '../assets/portfolio/7up4.webp';

//assembling
import assemble from '../assets/portfolio/asembling1.jpg';
import assemble2 from '../assets/portfolio/asembling2.jpg';
import assemble3 from '../assets/portfolio/asembling3.jpg';
import assemble4 from '../assets/portfolio/assemplenew.jpg';

//bluwaters
import bluewater1 from '../assets/portfolio/bluewaters1.webp';
import bluewater2 from '../assets/portfolio/bluewaters2.webp';
import bluewater3 from '../assets/portfolio/bluewaters3.webp';
import bluewater4 from '../assets/portfolio/bluewaters4.webp';

//zenith
import zenith1 from '../assets/portfolio/Zenith1.webp';
import zenith2 from '../assets/portfolio/Zenith2.webp';
import zenith3 from '../assets/portfolio/Zenith3.webp';
import zenith4 from '../assets/portfolio/Zenith4.webp';
import zenith5 from '../assets/portfolio/Zenith5.webp';
import zenith6 from '../assets/portfolio/zenith6.webp';

//eko
import eko1 from '../assets/portfolio/Eko1.jpg';
import eko2 from '../assets/portfolio/Eko2.jpg';
import eko3 from '../assets/portfolio/Eko3.jpg';
import eko4 from '../assets/portfolio/Eko4.jpg';
import eko5 from '../assets/portfolio/Eko5.jpg';
import eko6 from '../assets/portfolio/Eko6.jpg';

//fav
import fav1 from '../assets/portfolio/fav1.jpeg';
import fav2 from '../assets/portfolio/fav2.jpeg';
import fav3 from '../assets/portfolio/fav3.jpeg';
import fav4 from '../assets/portfolio/fav4.jpeg';
import fav5 from '../assets/portfolio/fav5.jpg';
import fav6 from '../assets/portfolio/fav6.jpg';

//rail
import rail1 from '../assets/portfolio/rail1.webp';
import rail2 from '../assets/portfolio/rail2.webp';
import rail3 from '../assets/portfolio/rail3.webp';
import rail4 from '../assets/portfolio/rail4.webp';
import rail5 from '../assets/portfolio/rail5.webp';
import rail6 from '../assets/portfolio/rail6.webp';
import rail7 from '../assets/portfolio/rail7.webp';
import rail8 from '../assets/portfolio/rail8.webp';
import rail9 from '../assets/portfolio/rail9.webp';
import railfav from '../assets/portfolio/railfav.jpg';

//salvation

import salvation1 from '../assets/portfolio/salvation1.webp';
// import salvation2 from '../assets/portfolio/salvation2.JPG';
import salvation3 from '../assets/portfolio/salvation3.webp';
import salvation4 from '../assets/portfolio/salvation4.webp';
import salvation5 from '../assets/portfolio/salvation5.webp';

import towers1 from '../assets/portfolio/towers1.jpg';
import towers2 from '../assets/portfolio/towers2.jpg';
import towers3 from '../assets/portfolio/towers3.jpg';
import towers4 from '../assets/portfolio/towers4.jpg';

import nr1 from '../assets/portfolio/nr1.webp';
import nr2 from '../assets/portfolio/nr2.webp';
import nr3 from '../assets/portfolio/nr3.webp';
import nr4 from '../assets/portfolio/nr4.webp';
import nr5 from '../assets/portfolio/nr5.webp';
import nr6 from '../assets/portfolio/nr6.webp';

import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

import pen1 from '../assets/brands/pen1.webp';
import pen2 from '../assets/brands/pen2.webp';
import pen3 from '../assets/brands/pen3.webp';
import pen4 from '../assets/brands/pen4.webp';
import pen5 from '../assets/brands/pen5.webp';
import pen6 from '../assets/brands/pen6.webp';

//drawings
import drawing1 from '../assets/portfolio/drawings1.png';
import drawing2 from '../assets/portfolio/drawings2.png';
import drawing3 from '../assets/portfolio/drawings3.png';
import drawing4 from '../assets/portfolio/drawings4.png';

//water tank images
import tank1 from '../assets/portfolio/tank1.webp';
import tamk2 from '../assets/portfolio/tank2.webp';
import tank3 from '../assets/portfolio/tank3.webp';
import tank4 from '../assets/portfolio/tank4.webp';






const PROJECTS = [
  {
    title: 'AZURI TOWERS',
    category: 'Residential',
    categorys: 'Residential Project',
    titleImage: towers4,
    id:0,
    images: [towers4, towers3, drawing1, drawing2, drawing3,drawing4], // Add other images for this project
    description:
      "Formyard team, previously known as Doka Formwork Nig Ltd, successfully executed the Azuri Towers project in 2017 for ITB Nigeria FZE. The project showcased their prowess in construction and engineering services, involving the implementation of hydraulic climbing systems, specifically the SKE50+ and SKE50 system. With top-tier materials like Large-area Formwork Top 50 system and Doka TRENN, Formyard demonstrated excellence in both sales and refurbishing of the SKE50 equipment previously used at Eko Tower 2. The Azuri Towers project stands as a testament to Formyard's commitment to delivering high-quality formwork solutions and innovative engineering services, solidifying their reputation in the industry.",
  },
  {
    title: 'PEN CINEMA ',
    titleImage: pen1,
    id:1,
    category: 'Bridge',
    categorys: 'Bridge Project',
    images: [pen1, pen3, pen6], // Add other images for this project
    description:
      "Formyard team, previously known as Doka Formwork Nig Ltd, proudly undertook the supply and design of the formwork for the Pen Cinema project from 2017 to 2018 in collaboration with Hitech Construction Company Ltd. Employing advanced systems like Timber-Beam Formwork and a Concrete Pressure Monitoring System, Formyard's engineering prowess, and the use of quality materials such as Large Area Formwork TOP 50 system showcased their commitment to excellence in construction.",
  },
  {
    title: 'EL-ALAN: NR4 PROJECT BY FORMYARD LTD',
    category: 'Residential',
    categorys: 'Residential Project',
    titleImage: nr6,
    id:2,
    images: [nr6, nr2, nr3, nr5],
    description:
      "The Formyard team, previously known as Doka Formwork Nig Ltd, showcased its expertise in large-scale construction with the successful completion of Project NR 4 in 2016. Collaborating with RCF Ltd, Formyard Ltd provided comprehensive engineering services, focusing on Slab Formwork 1-2-4 and Climbing Formwork. The innovative use of Telescopic Shaft Beams (3-S0) and Doka Trenn materials underscored Formyard Ltd's commitment to precision and efficiency. The incorporation of climbing Formwork and Bracket K platforms showcased cutting-edge techniques, ensuring a seamless construction process. This project stands as a testament to Formyard Ltd's dedication to delivering top tier engineering solutions and reinforcing its position as an industry leader.",
  },
  {
    title: "NLNG Phase 2: Formyard's Excellence in RA Housing Construction",
    titleImage: fav6,
    id:3,
    category: 'Residential',
    categorys: 'Residential Project',
    images: [fav6, fav3, fav5],
    description:
      "Formyard team previously known as Doka formwork Nig Ltd spearheaded the NLNG Phase 2 Project in Bonny, Port Harcourt, comprising the construction of 72 Apartment Type RA Housing Units. Leveraging advanced systems like Dokadek 30 with Drop Heads and Framed Formwork Frami Eco, Formyard Ltd showcased its commitment to innovation and precision in large-scale construction. This project not only adds significant housing infrastructure to Bonny but also underscores Formyard Ltd's reputation for excellence in the construction industry.",
  },

  {
    title: '7-UP TRUCK PARK',
    titleImage: up2,
    id:4,
    category: 'Park',
    categorys: 'Park Project',
    images: [up1, up2, up3, up4],
    description:
      'The Formyard team previously known as Doka Formwork Nig Ltd "7-UP Truck Park" project, undertaken in 2014-2015, showcased our expertise in engineering services. The project involved the implementation of a comprehensive system that included single-sided formwork, top 50 slab formwork, floor props, and timber formwork. Our choice of materials, such as Eurex props, H20 beams, and 3-SO sheets, ensured the structural integrity and durability of the project. The "7-UP Truck Park" exemplifies our commitment to delivering high-quality, reliable solutions and reflects our dedication to excellence in construction and engineering.',
  },
  {
    title: 'Zenith Car Park',
    titleImage: zenith1,
    category: 'Park',
    id:5,
    categorys: 'Park Project',
    images: [zenith1, zenith6, zenith5],
    description:
      'Introducing "Zenith Car Park," a remarkable parking lot created by the Formyard team, formerly known as Doka Formwork Nig Ltd. This innovative project is tailored for a prominent bank staff and clients to park their cars, showcasing our dedication to excellence and forward-looking initiatives. This Zenith parking facility stands as a testament to our unwavering commitment to top-notch quality, innovation, and fostering the growth and prosperity of the region. ',
  },

  {
    title: 'YABA BRIDGE',
    titleImage: rail9,
    category: 'Bridge',
    id:6,
    categorys: 'Bridge Project',
    images: [rail9, rail4, rail6, rail7],
    description:
      "The Formyard team, formerly known as Doka Formwork Nig Ltd, played a crucial role in making this construction project a success. Using the latest and most advanced engineering methods, Formyard Ltd showed how dedicated they are to being super precise and innovative when it comes to building really big things like roads and bridges. This project wasn't just about making things; it was about making them well and making a big impact on how people get around. By doing this, Formyard Ltd proved that they're a standout in the construction world, known for getting things done efficiently and with top-notch quality.",
  },
  {
    title: 'WATER TANK (Rental)',
    titleImage: tank3,
    category: 'Rental',
    id:7,
    categorys: 'Rental Project',
    images: [tank1, tamk2, tank3, tank4],
    description:
      "In 2023, the Formyard team, previously known as Doka Formwork Nig Ltd, teamed up with South EnergyX FZE to deliver a cutting-edge solution for water infrastructure with the Water Tank (Rental) project. They used super strong and fast equipment like the Load Bearing Towers Staxo 100 and D2 + H20 materials to make sure the water tanks were sturdy and reliable. By doing this, Formyard Ltd proved they're experts at making sure things work well and last a long time, especially when it comes to water projects. This project is just another example of how Formyard Ltd is known for coming up with smart and innovative ideas in the construction and engineering world.",
  },

  {
    title: 'PHC TRAINING PROGRAM: SUDELETTRA TRAINING ',
    titleImage: train4,
    category: 'Training',
    id:8,
    categorys: 'Training Project',
    images: [train4, train5, train4],
    description:
      "FORMYARD LTD's PHC Training Program, known as SUDELETTRA Training 1, stands as a specialized initiative meticulously crafted to impart crucial skills and knowledge pertinent in Port Harcourt (PHC). Introduced in 2012 this program is tailored to cater to the unique requirements of the region. FORMYARD LTD successfully executed the 'Various Foundation Works for Exxon Mobil' project for SUDELETTRA, showcasing their prowess in engineering services focused on assembly. The system offered for this project was the cutting-edge FRAMED FORMWORK (FRAMI XLIFE). <br>This training program, SUDELETTRA Training 1, not only delivers invaluable insights but also reflects FORMYARD LTD's expertise and experience gleaned from executing significant projects like the Exxon Mobil foundations, highlighting their commitment to skill development and addressing the specific needs of the Port Harcourt region.",
  },
  {
    title: 'SERVICE ASSEMBLY OFFERED BY FORMYARD LTD',
    titleImage: assemble,
    category: 'Assemble',
    id:9,
    categorys: 'Assemble Project',
    images: [assemble, assemble2, assemble4],
    description:
      "At FORMYARD LTD, our suite of services extends to an exceptional offering: our Assembling Drawings Services. With a wealth of expertise and cutting-edge resources at our disposal, we specialize in seamlessly assembling a diverse array of drawings tailored to meet multifaceted needs.<br /> Our Assembling Drawings Services go beyond conventional assembly; they represent a meticulous fusion of precision and innovation. Each drawing is meticulously crafted to not only fulfil the specific requirements of our clients but also serve as a detailed roadmap for project realization. These drawings aren't just about bringing elements together; they act as a comprehensive guide, streamlining processes, optimizing resource allocation, and significantly enhancing overall operational efficiency. At FORMYARD LTD, we take pride in delivering Assembling Drawings Services that transform complex concepts into visual blueprints, ensuring a smooth and efficient execution of projects while surpassing client expectations.",
  },
];

const Portfolio = () => {
  const[selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
  selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category == selectedCategory);


  return (
    <div>
      <div class="relative mx-auto ">
        <div>
          <img
            src={railfav}
            alt=""
            className="h-screen w-full object-cover rounded-md"
          />
        </div>
        <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div className="flex  flex-1 item-start flex-col  justify-center lg:py-44  lg:gap-6  z-999 max-container 4xl:max-none padding-container   py-2 pb-32 gap-4 lg:pb-20 lg:pt-2  ">
            <div>
              <h1 className="bold-28 md:bold-52 lg:bold-88 text-white text-center">
                Portfolio
              </h1>
            </div>
            {/* <p className="text-white regular-14 lg:regular-20 lg:w-[570px]">
            If you need help or question, we’re here for you
            </p> */}
            <div>
              {/* <button className="rounded-full text-black text-base font-bold text-start bg-[#FFDD00] px-12  py-3">
                <Link to="/contact">
                  Contact us
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py-12  items-center justify-center ">
        <h2 className="text-center text-6xl font-bold">Portfolio</h2>
        <div className="flex text-center mx-auto gap-4  items-center justify-center  mt-2 ">
        <button className='font-bold ' onClick={() => handleCategoryClick('All')}>All Projects</button>
          <button className='font-bold ' onClick={() => handleCategoryClick('Residential')}>Residential</button>
          <button className='font-bold ' onClick={() => handleCategoryClick('Bridge')}>Bridge</button>
          <button className='font-bold ' onClick={() => handleCategoryClick('Park')}>Park</button>
          <button className='font-bold ' onClick={() => handleCategoryClick('Rental')}>Rental</button>
          <button className='font-bold ' onClick={() => handleCategoryClick('Training')}>Training</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols lg:grid-cols-4">
      {filteredProjects.map((project, index) => (
          <section
            key={index}
            className="relative container mx-auto cursor-pointer group pb-8"
          >
            {/* Link to the dynamic route */}
            <Link to={`/portfolio/${project.id}`} className="relative block">
              <img
                src={project.titleImage}
                alt="portfolio"
                className="h-[200px] w-[400px] transition-transform duration-300 transform group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70">
                {/* Image title on hover */}
                <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex gap-4 font-bold">
                  {project.title}
                  <br />
                  {project.categorys}
                </div>
              </div>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
