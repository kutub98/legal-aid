import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo192.png'
import logo2 from '../../assets/logo/bigLogo.png'
import { FaBars, FaWindowClose } from "react-icons/fa"
import './Header.css'
const Header = () => {
    const [openMenu, setOpenMenu] =useState(true)
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                <Link to="/home"><img src={logo2} alt="" className="logo2 w-56 h-14" /></Link>
                <Link to="/home"><img src={logo} alt="" className="logo1 w-12 h-14" /></Link>
                </div>
                <div className="menubar">
                { openMenu ?
                    <ul className="bigDisplay hidden">
                    <li><Link to='/home'>Home</Link></li>
                    <li> <Link to='/Blog'>Blog</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li> <Link to='/login'>login</Link></li>
                    <li> <Link to='/Register'>Register</Link></li>
                    </ul>
                : <ul className="smallDisplay">
                <li><Link to='/home'>Home</Link></li>
                <li> <Link to='/Blog'>Blog</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li> <Link to='/login'>login</Link></li>
                <li> <Link to='/Register'>Register</Link></li>
                </ul>
                }
                <div className='' onClick={()=> setOpenMenu(!openMenu)}>
                    { openMenu ?
                        <button><FaBars className="w-7 h-7 lg:invisible"/></button> :
                        <button><FaWindowClose className="w-7 visible lg:invisible h-7"/></button>
                    }
                </div>
                </div>
                
                
            </nav>
        </div>
    );
};

export default Header;