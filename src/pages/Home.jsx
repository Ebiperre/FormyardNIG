import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Solution from "../components/Solution"
import Products from "../components/Products"

const Home = () => {
  return (
    <div className='w-full '>
        <Navigation />
        <Hero  />
        <Stats  />
        <Services />
        <Solution />
        <Products />
      

    </div>
  )
}

export default Home
