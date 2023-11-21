import React from 'react'
// import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Solution from "../components/Solution"
import Products from "../components/Products"
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import Brands from '../components/brands'

const Home = () => {
  return (
    <div className='w-full '>
        <Hero  />
        <Brands />
        <Stats  />
        <Services />
        <Solution />
        <Products />
        <Clients  />
        <Projects  />
      

    </div>
  )
}

export default Home
