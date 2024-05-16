
import React from 'react'
import bannerImg from '../Images/rightLargeImg.webp'

import './SectionTwo.css'

const SectionTwo = () => {
    return (
        <div className='sectionTwoDiv'>
            <div className="sectionTwoLeft">
                <h2>Earn free money <br />
                 with Ciseco
                </h2>
                <p>With Ciseco you will get freeship & savings combo...</p>
            
                <div>
                    <button className='savings'>Savings Combo</button>
                    <button>Discover</button>
                </div>
            </div>

            <div className="sectionTwoRight">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    )
}


export default SectionTwo

