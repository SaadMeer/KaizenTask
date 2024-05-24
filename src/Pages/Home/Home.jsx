import React from 'react'
import './Home.scss'
import NavBar from '../../components/Global/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Global/Footer/Footer'
import Upcoming from '../../components/Upcoming/Upcoming'
import { Link } from 'react-router-dom'
import ChooseUs from '../../components/ChooseUs/ChooseUs'

const Home = () => {
    return (
        <div style={{ background: '#0A0A0F' }}>
            <NavBar />
            <div style={{ width: '100%', backgroundImage: 'linear-gradient(25deg, #2904fa, #fd03e8)' }}>
                <div style={{ width: '85%', padding: '10px', textAlign: 'right', margin: 'auto',cursor:'pointer', fontWeight:'bold',textDecoration:'underline' }}>
                    <Link style={{color:'white'}} to='/address'>Check the Other Way To connect Wallet</Link>
                </div>
            </div>
            <Hero />
            <Projects />
            <Upcoming />
            <ChooseUs/>
            <Footer />
        </div >
    )
}

export default Home