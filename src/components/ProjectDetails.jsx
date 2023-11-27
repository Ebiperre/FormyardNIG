import { useParams } from 'react-router-dom';


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

const PROJECTS = [
    {
      title: "Azuri Towers, 2017",
      titleImage: towers4,
      images: [towers4, towers3], // Add other images for this project
      description: "Formyard team, previously known as Doka formwork Nig Ltd, successfully executed the Azuri Towers project in 2017 for ITB Nigeria FZE. The project showcased their prowess in construction and engineering services, involving the implementation of hydraulic climbing systems, specifically the SKE50+ and SKE50 system. With top-tier materials like Large-area Formwork Top 50 system and Doka TRENN, Formyard demonstrated excellence in both sales and refurbishing of the SKE50 equipment previously used at Eko Tower 2. The Azuri Towers project stands as a testament to Formyard's commitment to delivering high-quality formwork solutions and innovative engineering services, solidifying their reputation in the industry.",
    },
    {
      title: "Pen Cinema Project",
      titleImage: pen1,
      images: [pen1, pen3, pen6], // Add other images for this project
      description: "Formyard Ltd proudly undertook the supply and design of the formwork for the Pen Cinema project from 2017 to 2018 in collaboration with Hitech Construction Company Ltd. Employing advanced systems like Timber-Beam Formwork and a Concrete Pressure Monitoring System, Formyard's engineering prowess, and the use of quality materials such as Large Area Formwork TOP 50 system showcased their commitment to excellence in construction.",
    },
    {
      title: "EL-ALAN : NR4 PROJECT BY FORMYARD LTD",
      titleImage: nr6,
      images: [nr6, nr2, nr3, nr5],
      description: "The Formyard team, previously known as Doka formwork Nig Ltd, showcased its expertise in large-scale construction with the successful completion of Project Number 4 in 2016. Collaborating with Ranjy Construction & Foundation Limited, Formyard Ltd provided comprehensive engineering services, focusing on slab formwork 1-2-4 and climbing formwork. The innovative use of telescopic shaft beams (3-50) and Doka Trenn materials underscored Formyard Ltd's commitment to precision and efficiency. The incorporation of climbing formwork and bracket K platforms showcased cutting-edge techniques, ensuring a seamless construction process. This project stands as a testament to Formyard Ltd's dedication to delivering top-tier engineering solutions and reinforcing its position as an industry leader."
    },
    {
      title: "NLNG Phase 2: Formyard's Excellence in RA Housing Construction",
      titleImage: fav6,
      images: [fav6, fav3, fav5],
      description: "Formyard team previously known as Doka formwork Nig Ltd spearheaded the NLNG Phase 2 Project in Bonny, Port Harcourt, comprising the construction of 72 Apartment Type RA Housing Units. Leveraging advanced systems like Dokadek 30 with Drop Heads and Framed Formwork Frami Eco, Formyard Ltd showcased its commitment to innovation and precision in large-scale construction. This project not only adds significant housing infrastructure to Bonny but also underscores Formyard Ltd's reputation for excellence in the construction industry."
    },
  
    {
      title: "7UP Truck Park BY FORMYARD LTD",
      titleImage: up1,
      images: [up1, up2, up3, up4],
      description: 'The Formyard team previously known as Doka formwork Nig Ltd "7UP Truck Park" project, undertaken in 2014-2015, showcased our expertise in engineering services. The project involved the implementation of a comprehensive system that included single-sided formwork, top 50 slab formwork, floor props, and timber formwork. Our choice of materials, such as Eurex props, H20 beams, and 3-SO sheets, ensured the structural integrity and durability of the project. The "7UP Truck Park" exemplifies our commitment to delivering high-quality, reliable solutions and reflects our dedication to excellence in construction and engineering.'
    },
    {
      title: "Zenith Car Park",
      titleImage: zenith1,
      images: [zenith1, zenith6, zenith5],
      description: 'The Formyard team previously known as Doka formwork Nig Ltd is excited to introduce "Zenith," a remarkable building constructed for a prominent bank. This project exemplifies our relentless pursuit of excellence and forward-thinking. "Zenith" represents a significant milestone in our journey to create sustainable and visionary developments for our valued clients. In the "Zenith" project, we\'ve combined cutting-edge design, eco-friendly practices, and community enhancement to craft a unique and vibrant structure. This building embodies our commitment to quality, innovation, and contributing to the growth and prosperity of the region.'
    },
  
    {
      title: "YABA BRIDGE BY FORMYARD LTD'S",
      titleImage: rail9,
      images: [rail9, rail4, rail6, rail7],
      description: 'The Formyard team previously known as Doka formwork Nig Ltd takes pride in its pivotal role in the successful execution of a railway construction project. Employing state-of-the-art engineering techniques, Formyard Ltd demonstrated its commitment to precision and innovation in large-scale infrastructure development. The project, marked by efficiency and excellence, not only contributes significantly to transportation advancement but also reinforces Formyard Ltd\'s distinguished position in the construction industry.'
    },
    {
      title: "Water Tank (Rental) - 2023",
      titleImage: image3,
      images: [image3, image2, image3],
      description: 'In 2023, Formyard team previously known as Doka formwork Nig Ltd collaborated with South Energyx Nigeria Limited to deliver a cutting-edge solution for water infrastructure with the Water Tank (Rental) project. Employing a high-capacity, high-speed shoring system, Formyard Ltd utilized Load Bearing Towers Staxo 100 and D2 + H20 materials to ensure robust structural support. The engineering services provided by Formyard Ltd showcased expertise in optimizing efficiency and reliability in water infrastructure projects. This endeavor further solidifies Formyard Ltd\'s reputation for delivering innovative solutions in the realm of construction and engineering.',
    },
  
    {
      title: "FORMYARD LTD'S PHC TRAINING PROGRAM: SUDELETTRA TRAINING 1",
      titleImage: train4,
      images: [train4, train5, train4],
      description: 'The FORMYARD LTD\'s PHC Training Program, SUDELETTRA Training 1, is a specialized training initiative designed to provide essential skills and knowledge in Port Harcourt (PHC). This program offers valuable insights and competencies relevant to the specific needs of the region.',
    },
    {
      title: "SERVICE ASSEMBLY OFFERED BY FORMYARD LTD",
      titleImage: assemble,
      images: [assemble, assemble2, assemble],
      description: 'FORMYARD LTD offers a comprehensive service assembly that caters to various needs and requirements. Our expertise and resources enable us to efficiently assemble a wide range of services, providing convenience and satisfaction for our clients. This service assembly is utilized for streamlining processes, optimizing resource allocation, and enhancing overall operational efficiency.',
    },
  ]
  



const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = PROJECTS[projectId];

 
  return (
  
          <div className="px-5 py-8 container lg:px-36 mx-auto">
      <h2 className="font-bold">{project.title}</h2>
      <p className="font-normal text-[14px] md:text-[16px] md:text-left text-center">
        <span className="font-bold">DATE OF AWARD: {project.dateOfAward}</span> <br />
        <span className="font-bold"> PROJECT DESCRIPTION: </span>{project.description}
      </p>
      {/* Render additional images */}
      {project.images.map((image, imageIndex) => (
        <div key={imageIndex} className="w-full">
          <img src={image} alt={`portfolio image ${imageIndex + 1}`} />
        </div>
      ))}
    </div>

  )
}

export default ProjectDetails
