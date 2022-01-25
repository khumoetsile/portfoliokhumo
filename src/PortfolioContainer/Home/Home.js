import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import GalleryReact from './TabMenu/GalleryReact'

export default function Home() {
    return (
        <div className='home-container'>
            <Profile/>
            <Footer/>
            <div className="portfolio-section">
                <GalleryReact/>
            </div>
        </div>
    )
}
