import './Navbar.css';
import React, {useState} from 'react'
import {Button} from './Button'
import {Link, Router} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'


const Navbar = () => {
    const [click,setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);

        }else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);

        }else{
            setDropdown(false);
        }
    }

       

    
    return (
        <>
            <nav className='navbar'>
                <Link className='navbarLogo' to='/' >Epic</Link>
                <div className='m-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='menuItems'>
                        <Link className='navLink ' to='/' onClick={closeMenu} >Home</Link>
                    </li>
                    <li className='menuItems' onMouseEnter ={onMouseEnter} onMouseLeave = {onMouseLeave}>
                        <Link className='navLink ' to='/services' onClick={closeMenu} >
                        Services<i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='menuItems'>
                        <Link className='navLink ' to='/about' onClick={closeMenu} >About Us</Link>
                    </li>                    
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;