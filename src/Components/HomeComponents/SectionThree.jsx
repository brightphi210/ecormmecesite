import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import promo3 from '../Images/promo3.webp'
import './SectionThree.css'

const SectionThree = () => {
  return (
    <section className='sectionThree'>
        <div className='sectionThreeDiv'>
        <div className='sectionThreeSubDiv1'>
            <h2>Don't miss out on <br /> special offers</h2>
            <p>
                Register to receive news about the latest, savings combos,
                <br />
                discount codes...
            </p>

            <ul>
                <li><span className='spansElement1'>01</span>Saving Combos</li>
                <li><span className='spansElement2'>02</span>Freeship</li>
                <li><span className='spansElement3'>03</span>Premium magazines</li>
            </ul>

            <form action="">
                <input type="email" placeholder='Enter your email' required/>
                <button><FaArrowRight /></button>
            </form>
        </div>

        <div className='sectionThreeSubDiv2'>
            <img src={promo3} alt="" />
        </div>
        </div>
    </section>
  )
}

export default SectionThree