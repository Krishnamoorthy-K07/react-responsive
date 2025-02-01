import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

    const [icon,setIcon] = useState(false);

    const handleClick = () => {
        setIcon(!icon);
    }
    return (
        <>
        <nav className='nav-bar'>
            <Link className='nav-logo' to='/'>LOGO</Link>

            <div onClick={handleClick}>
                { icon ? <AiOutlineClose className='fa-times'></AiOutlineClose> : <AiOutlineMenu className= 'fa-bars'></AiOutlineMenu> }
            </div>
            <ul>
                <Link to='/'>Home</Link>
            </ul>
            <ul>
                <Link to='/about'>About</Link>
            </ul>
            <ul>
                <Link to='/products'>Products</Link>
            </ul>
            <ul>
                <Link to='/contact'>Contact</Link>
            </ul>
            <ul>
                <Link to='/services'>Services</Link>
            </ul>
        </nav>
        </>
       
    );
}

export default Navbar;