import React from 'react'
// import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Solution from "../components/Solution"
import Products from "../components/Products"
import Clients from '../components/Clients'

const Home = () => {
  return (
    <div className='w-full '>
        {/* <Navigation /> */}
        <Hero  />
        <Stats  />
        <Services />
        <Solution />
        <Products />
        <Clients  />
      

    </div>
  )
}

export default Home
