import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import LandingPageAboutUs from '../About us/LandingPageAboutUs'
import LandingCoures from '../Our Courses/LandingCoures'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <LandingPageAboutUs/>    
        <LandingCoures/>
        </div>
  )
}

export default Home