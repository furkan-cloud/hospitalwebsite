import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo2.png';

const Header = () => {
    return (
        <div id="header_container">
            <div id="logo">
                <Link to="/"><img src={Logo} width="200" height="85"></img></Link>
            </div>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
