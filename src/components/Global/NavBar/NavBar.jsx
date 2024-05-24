import React from 'react'
import './NavBar.scss'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-main-container'>
            <div className='navbar-inner-container w-85'>
                <div className='logo-container'>Logo</div>
                <div className='navbar-menu-container'>
                    <Link to="" href='#'>Home</Link>
                    <Link to="" href='#'>Overview</Link>
                    <Link to="/aboutus" href='#'>About Us</Link>
                    <Link to="" href='#'>FAQ</Link>
                    <Link to="" href='#'>MarketPlace</Link>
                </div>
                <div className='navbar-btn-container'>
                    <button className='themeBtn-trans'>Sign</button>
                    <button className='themeBtn' style={{ padding: '0px 10px' }}><ConnectButton showBalance={false} chainStatus="none" accountStatus={{
                        smallScreen: 'avatar',
                        largeScreen: 'avatar'
                    }} /></button>
                </div>
            </div>
        </div>
    )
}

export default NavBar