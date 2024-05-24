import React from 'react'
import './Hero.scss'
import img from '../../assets/images/banner.b41e8bd3384755f8ff18.png'

const Hero = () => {
    return (
        <div className='hero-main-container'>
            <div className='hero-centered-contaiiner w-85'>
                <div className='hero-left-container'>
                    <h1>Collect Next Generation <span className='primaryClr'>NFT's</span> Today</h1>
                    <p>Lorem ipsum dolor sit amet, <span className='secondaryClr'>consectetur </span>adipiscing elit.
                        Donec</p>

                    <h6>MovieMint liberates Filmmakers and fans through decentralized funding.
                        Our Blockchain platform seamlessly connects Independent Creators and Passionate Supporters. Filmmakers tokenize projects into NFT "movie shares" that fans can buy and tradel. This raises production funds while retaining full ownership and creative control while fans.</h6>
                </div>
                <div className='hero-right-container'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero