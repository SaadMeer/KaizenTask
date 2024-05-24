import React from 'react';
import './ChooseUs.css';
import { Link } from 'react-router-dom';

const ChooseUs = () => {
    const gridData = [
        {
            title: "Exclusive NFT Collections",
            description: "Discover unique and exclusive NFT collections curated by top artists and creators around the world. Each piece is one-of-a-kind and available only here."
        },
        {
            title: "Secure Transactions",
            description: "Our platform ensures all your transactions are secure and transparent, utilizing the latest blockchain technology to guarantee the integrity of your assets."
        },
        {
            title: "Global Marketplace",
            description: "Connect with NFT enthusiasts and collectors from all over the globe. Our marketplace offers a diverse range of NFTs, catering to every taste and preference."
        },
        {
            title: "Creator Support",
            description: "We provide extensive support for creators, helping them to mint, showcase, and sell their NFTs. Join a community that values and uplifts artistic expression."
        },
        {
            title: "Royalties for Artists",
            description: "With our platform, artists earn royalties on every resale of their work. This ensures they continue to benefit as their creations appreciate in value."
        },
        {
            title: "User-Friendly Interface",
            description: "Our intuitive and user-friendly dashboard makes it easy for anyone to buy, sell, and manage their NFT collections, regardless of their experience level."
        },
    ];

    return (
        <div className="whyChooseUs-container">
            <div className="choose-ShadowImg-container">
                <h2>Services</h2>
                <h3>Why Choose Us</h3>
                <p>We offer a reliable & comprehensive NFT platform designed for artists, collectors, and enthusiasts. Our services are tailored to<br/> provide outstanding user experiences and secure transactions.</p>
                <div className="chooseGrids-container">
                    {gridData.map((item, index) => (
                        <div className="chooseGrid-box" key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <Link to="" className="themeBtn">Learn more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;
