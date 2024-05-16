import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/HomeComponents/SectionOne'
import SectionTwo from '../Components/HomeComponents/SectionTwo'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default HomePage