import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/HomeComponents/SectionOne'
import SectionTwo from '../Components/HomeComponents/SectionTwo'
import SectionThree from '../Components/HomeComponents/SectionThree'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  )
}

export default HomePage