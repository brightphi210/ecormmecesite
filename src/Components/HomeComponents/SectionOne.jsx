import React, { useState } from 'react'
import './SectionOne.css'
import image1 from '../Images/hero-right.webp'
import image2 from '../Images/hero-right-2.webp'
import image3 from '../Images/hero-right-3.webp'


import cardImg1 from '../Images/1.webp'
import cardImg2 from '../Images/3.webp'
import cardImg3 from '../Images/4.webp'
import cardImg4 from '../Images/5.webp'

import img1 from '../Images/sport-2.webp'
import img2 from '../Images/sport-3.webp'
import img3 from '../Images/sport-4.webp'
import img4 from '../Images/sport-6.webp'
import img5 from '../Images/sport-7.webp'

import { FiSearch } from "react-icons/fi";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const SectionOne = () => {

  AOS.init();


  const [showSectionOne, setShowSectionOne] = useState(true)
  const [showSectionTwo, setShowSectionTwo] = useState(false)
  const [showSectionThree, setShowSectionThree] = useState(false)

  const handleChangeOne = () => {
    setShowSectionOne(true);
    setShowSectionTwo(false);
    setShowSectionThree(false);
  }


  const handleChangeTwo = () => {
    setShowSectionOne(false);
    setShowSectionTwo(true);
    setShowSectionThree(false);
  }


  const handleChangeThree = () => {
    setShowSectionOne(false);
    setShowSectionTwo(false);
    setShowSectionThree(true);
  }


  
  return (

    <div>
      <div className='generalHomeSection'>

        {showSectionOne === true && 
          <div className='homeSectionOne' data-aos="fade-up"
          data-aos-duration="2000">
              <div className='firstSection'>
                  <p>In this season, find the best 🔥</p>
                  <h2>Exclusive collection for everyone</h2>
                  <button>Explore Now <FiSearch /></button>
              </div>


              <div className='secondSection'>
                  <img src={image1} alt="" />
              </div>
          </div>
        }

        {showSectionTwo === true && 
          <div className='homeSectionOne' data-aos="fade-up"
          data-aos-duration="2000">
              <div className='firstSection'>
                  <p>In this season, find the best 🔥</p>
                  <h2>Exclusive collection for everyone</h2>
                  <button>Explore Now <FiSearch /></button>
              </div>


              <div className='secondSection'>
                  <img src={image2} alt="" />
              </div>
          </div>
        }

        {showSectionThree === true && 
          <div className='homeSectionOne' data-aos="fade-up"
          data-aos-duration="2000">
              <div className='firstSection'>
                  <p>In this season, find the best 🔥</p>
                  <h2>Exclusive collection for everyone</h2>
                  <button>Explore Now <FiSearch /></button>
              </div>


              <div className='secondSection'>
                  <img src={image3} alt="" />
              </div>
          </div>
        }

        <div className='myBtn'>
          <button className={showSectionOne === true && 'activeBtn'} onClick={handleChangeOne} ></button>
          <button className={showSectionTwo === true && 'activeBtn'} onClick={handleChangeTwo}></button>
          <button className={showSectionThree === true && 'activeBtn'} onClick={handleChangeThree}></button>
        </div>
      </div>

      <div className='homeSectionTwo'>
        <h2 className='homeSectionTwoh2'>Discover more. Good things are waiting for you</h2>


        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide>
            <div className='card1'>

              <div className='card1One'>
                <p>Explore new arivals</p>
                <h2>Shop the lastest <br /> from top brands</h2>
                <button>show me all</button>
              </div>

              <div className='card1Two'>
                <img src={cardImg1} alt="" />
              </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card1 two'>

            <div className='card1One'>
              <p>Explore new arivals</p>
              <h2>Shop the lastest <br /> from top brands</h2>
              <button>show me all</button>
            </div>

            <div className='card1Two'>
              <img src={cardImg4} alt="" />
            </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1 three'>

              <div className='card1One'>
                <p>Explore new arivals</p>
                <h2>Shop the lastest <br /> from top brands</h2>
                <button>show me all</button>
              </div>

              <div className='card1Two'>
                <img src={cardImg2} alt="" />
              </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card1'>

              <div className='card1One'>
                <p>Explore new arivals</p>
                <h2>Shop the lastest <br /> from top brands</h2>
                <button>show me all</button>
              </div>

              <div className='card1Two'>
                <img src={cardImg3} alt="" />
              </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card1'>

              <div className='card1One'>
                <p>Explore new arivals</p>
                <h2>Shop the lastest <br /> from top brands</h2>
                <button>show me all</button>
              </div>

              <div className='card1Two'>
                <img src={cardImg1} alt="" />
              </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>

            <div className='card1One'>
              <p>Explore new arivals</p>
              <h2>Shop the lastest <br /> from top brands</h2>
              <button>show me all</button>
            </div>

            <div className='card1Two'>
              <img src={cardImg1} alt="" />
            </div>

          </div>
        </SwiperSlide>
        </Swiper>
      </div>


      <div className='homeSectionTwo'>
        <h2 className='homeSectionTwoh2'>New Arrivals. REY backpacks & bags</h2>


        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide>
            <div className='card2'>
              <div className='card2Two'>
                <img src={img2} alt="" />
              </div>

              <div className='card2One'>
                <p>Leave Gloves</p>
                <p>Perfect mint green</p>
              </div>

              <ul className="card2List">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>

              <div className='card2Onediv'>
                  <span>$42</span>

                  <p>4.9(98 reviews)</p>
              </div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card2'>
              <div className='card2Two'>
                <img src={img1} alt="" />
              </div>

              <ul className="card2List">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>

              <div className='card2One'>

                <p>Leave Gloves</p>
                <p>Perfect mint green</p>

                <div className='card2Onediv'>
                  <span>$42</span>

                  <p>4.9(98 reviews)</p>
                </div>
              </div>



            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card2'>
              <div className='card2Two'>
                <img src={img3} alt="" />
              </div>

              <div className='card2One'>
                <p>Leave Gloves</p>
                <p>Perfect mint green</p>
              </div>

              <ul className="card2List">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>


              <div className='card2Onediv'>
                  <span>$42</span>

                  <p>4.9(98 reviews)</p>
              </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='card2'>
              <div className='card2Two'>
                <img src={img4} alt="" />
              </div>

              <div className='card2One'>
                <p>Leave Gloves</p>
                <p>Perfect mint green</p>
              </div>

              <ul className="card2List">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>


              <div className='card2Onediv'>
                  <span>$42</span>

                  <p>4.9(98 reviews)</p>
              </div>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='card2'>
              <div className='card2Two'>
                <img src={img5} alt="" />
              </div>

              <div className='card2One'>
                <p>Leave Gloves</p>
                <p>Perfect mint green</p>
              </div>


              <div className='card2Onediv'>
                  <span>$42</span>

                  <p>4.9(98 reviews)</p>
              </div>

            </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SectionOne

