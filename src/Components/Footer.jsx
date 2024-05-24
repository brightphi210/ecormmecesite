import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerDiv'>
        <div className='footerUl'>
            <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
            <ul>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Twitter</li>
                <li>Telegram</li>
            </ul>
        </div>


        <div className='footerUl'>
            <p>Getting started</p>
            <ul>
                <li>Release Notes</li>
                <li>Upgrade Guide</li>
                <li>Browser Support</li>
                <li>Dark Mode</li>
            </ul>
        </div>


        <div className='footerUl'>
            <p>Explore</p>
            <ul>
                <li>Release Notes</li>
                <li>Upgrade Guide</li>
                <li>Browser Support</li>
                <li>Dark Mode</li>
            </ul>
        </div>


        <div className='footerUl'>
            <p>Resources</p>
            <ul>
                <li>Release Notes</li>
                <li>Upgrade Guide</li>
                <li>Browser Support</li>
                <li>Dark Mode</li>
            </ul>
        </div>


        <div className='footerUl'>
            <p>Community</p>
            <ul>
                <li>Release Notes</li>
                <li>Upgrade Guide</li>
                <li>Browser Support</li>
                <li>Dark Mode</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer