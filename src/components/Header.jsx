import React from 'react'
import logo from '../assets/logo.svg';


const Header = () => {
    return (
        <div>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="Logo"/>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Header
