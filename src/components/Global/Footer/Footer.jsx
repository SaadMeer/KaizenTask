import React from 'react'
import './Footer.scss'

import img1 from '../../../assets/images/portfolio.5c35beca2c37f3ee7eb9.png'

const Footer = () => {
    return (
        <footer class="flex">
            <div class="footer-left-container">

                <div class="footer-leftFirst-inner-container">
                    <div className='logo-container'>LOGO</div>
                    <p>Unlock your NFT potential and Become a Cyfonii Player Now</p>
                </div>

                <div class="footer-leftSecond-inner-container">
                    <div class="footer-leftSecond-box">
                        <h5>PAGES</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">F&Q</a></li>
                            <li><a href="#">NFT's</a></li>
                        </ul>
                    </div>
                    <div class="footer-leftSecond-box">
                        <h5>OUR SOCIAL MEDIA</h5>
                        <ul>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-leftfourth-inner-container">
                    <p>Copyright © Hotel Chauffeur.com 2017. All rights reserved.</p>
                </div>

            </div>

            <div class="footer-right-container">
                <div class="flex justify-end">
                    <img src={img1} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer