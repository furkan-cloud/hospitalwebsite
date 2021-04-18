import React, {useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/images/logo2.png';
import "./style.css";



const Header = () => {
    const history = useHistory();
    useEffect(() => {
        
        history.push("/");
        
    }, [])
    return (
        <div id="header_container">
            <div id="logo">
                <Link to="/"><img src={Logo} width="200" height="85"></img></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Header
