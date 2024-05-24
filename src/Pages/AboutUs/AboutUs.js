import React from 'react'
import NavBar from '../../components/Global/NavBar/NavBar'
import Footer from '../../components/Global/Footer/Footer'
import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div style={{ background: '#0A0A0F' }}>
            <NavBar />
            <div class="aboutUsSection-container">
                <div class="aboutUsSection-inner-container">
                    <h5>ABOUT US</h5>
                    <h2>Who we are</h2>
                    <p>Welcome to our platform—where NFT excellence meets passion! Our journey began with a simple goal: to
                        elevate the NFT experience for collectors and creators worldwide. We’re more than just a service;
                        we’re a community of dedicated enthusiasts who understand the thrill of discovery, the joy of owning unique assets, and the frustration of navigating the complex NFT landscape.</p>
                    <p>Our team comprises seasoned collectors, blockchain experts, and digital artists. They’re not
                        just professionals; they’re your allies in the digital frontier. We safeguard your investments like our
                        own, using encrypted communication channels, secure transactions, and strict protocols. Your privacy and security remain
                        our priority.</p>
                    <p>No cookie-cutter approaches here! Whether it’s buying, selling, or creating NFTs, we customize our
                        offerings to fit your unique needs. And when you need assistance, our real humans are
                        available 24/7 via Discord or live chat.</p>
                </div>
                <img src="./assets/images/rocket.png" alt=""/>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs
