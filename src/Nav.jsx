import React from 'react';
import logo from './images/logo.svg'
import Hamburger from 'hamburger-react';

export default function Nav(){
    const [isOpen, setOpen] = React.useState(false)
   
    const handleToggle = () => {
        setOpen(prev => !prev)
        }

    return(
        <nav className='nav-bar'>
            <img className='logo' src={logo} alt='easybank_logo' />
         <ul className={`nav-ul ${isOpen ? " nav-ul" : "showMenu"}`}>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>About</a></li>
            <li><a href='/#'>Contact</a></li>
            <li><a href='/#'>Blog</a></li>
            <li><a href='/#'>Careers</a></li>
           </ul>    
           <ul>
           <li className='nav-req'><a className='btn' href='/#'>Request Invite</a></li>
        </ul> 
           <span className='hamburger-menu'> <Hamburger toggled={isOpen} toggle={handleToggle} color={'#2d314d'} size={28} /> </span> 
        </nav>
    )
}
