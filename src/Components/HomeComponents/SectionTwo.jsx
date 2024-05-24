
import React, { useState } from 'react'
import bannerImg from '../Images/rightLargeImg.webp'

import './SectionTwo.css'
import { RiWomenLine } from "react-icons/ri";
import { FaMendeley } from "react-icons/fa";

import image1 from '../Images/sport-2.webp'
import image2 from '../Images/sport-3.webp'
import image3 from '../Images/sport-4.webp'

const SectionTwo = () => {

    const [activeColor, setActiveColor] = useState(false)
    const [activeColor1, setActiveColor1] = useState(false)
    const [activeColor2, setActiveColor2] = useState(false)
    const [activeColor3, setActiveColor3] = useState(false)
    const [activeColor4, setActiveColor4] = useState(false)
    const [activeColor5, setActiveColor5] = useState(false)

    const changeColor = () =>{
        setActiveColor(true)
        setActiveColor1(false)
        setActiveColor2(false)
        setActiveColor3(false)
        setActiveColor4(false)
        setActiveColor5(false)

    }

    const changeColor1 = () =>{
        setActiveColor(false)
        setActiveColor1(true)
        setActiveColor2(false)
        setActiveColor3(false)
        setActiveColor4(false)
        setActiveColor5(false)

    }

    const changeColor2 = () =>{
        setActiveColor(false)
        setActiveColor1(false)
        setActiveColor2(true)
        setActiveColor3(false)
        setActiveColor4(false)
        setActiveColor5(false)

    }

    const changeColor3 = () =>{
        setActiveColor(false)
        setActiveColor1(false)
        setActiveColor2(false)
        setActiveColor3(true)
        setActiveColor4(false)
        setActiveColor5(false)

    }

    const changeColor4 = () =>{
        setActiveColor(false)
        setActiveColor1(false)
        setActiveColor2(false)
        setActiveColor3(false)
        setActiveColor4(true)
        setActiveColor5(false)

    }

    const changeColor5 = () =>{
        setActiveColor(false)
        setActiveColor1(false)
        setActiveColor2(false)
        setActiveColor3(false)
        setActiveColor4(false)
        setActiveColor5(true)

    }
    return (

        <div>

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


            <div className='exploreDiv'>
                <h2>Start exploring.</h2>

                <ul>
                    <li className={activeColor === true ? 'activeClass' : 'inActiveClass' } 
                    onClick={changeColor}><RiWomenLine /> Women</li>
                    <li className={activeColor1 === true ? 'activeClass' : 'inActiveClass' } 
                    onClick={changeColor1}><FaMendeley />Man</li>
                    <li className={activeColor2 === true ? 'activeClass' : 'inActiveClass' } 
                    onClick={changeColor2}>Kids</li>
                    <li className={activeColor3 === true ? 'activeClass' : 'inActiveClass' } 
                    onClick={changeColor3}>Sports</li>
                    <li className={activeColor4 === true ? 'activeClass' : 'inActiveClass' } 
                    onClick={changeColor4}>Beauty</li>
                    <li className={activeColor5 === true ? 'activeClass' : 'inActiveClass' } 
                    onClick={changeColor5}>Jewelry</li>
                </ul>


                <div className='imageCardDiv'>

                    <div className='imageCollectionGen'>
                        <div className='imageCollection'>
                            <div>
                                <img src={image1} alt="" />
                            </div>

                            <p>550 products</p>
                        </div>

                        <div className='manuClass'>
                            <h5>Manufacturer</h5>
                            <h1>Back Pack</h1>

                            <button>See Collections</button>
                        </div>

                    </div>

                    <div className='imageCollectionGen'>
                        <div className='imageCollection'>
                            <div>
                                <img src={image1} alt="" />
                            </div>

                            <p>550 products</p>
                        </div>

                        <div className='manuClass'>
                            <h5>Manufacturer</h5>
                            <h1>Back Pack</h1>

                            <button>See Collections</button>
                        </div>

                    </div>


                    <div className='imageCollectionGen'>
                        <div className='imageCollection'>
                            <div>
                                <img src={image1} alt="" />
                            </div>

                            <p>550 products</p>
                        </div>

                        <div className='manuClass'>
                            <h5>Manufacturer</h5>
                            <h1>Back Pack</h1>

                            <button>See Collections</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionTwo

