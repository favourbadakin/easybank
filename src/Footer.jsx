import React from 'react';
import {AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';
import {ImPinterest} from 'react-icons/im';
import logo from './images/logo-white.svg'

export default function Footer(){
    return(
        <footer>
            <div className='footer-items'>
            <div>
                <img src={logo} className='footer-img' alt='logo' />
        <ul className='socials'>
           <li> <a href='/#' className='footer-texts facebook'> <AiFillFacebook /> </a> </li>
           <li> <a href='/#' className='footer-texts youtube'> <AiFillYoutube /> </a> </li>
           <li> <a href='/#' className='footer-texts twitter'> <AiOutlineTwitter /> </a> </li>
           <li> <a href='/#' className='footer-texts pinterest'> <ImPinterest /> </a></li>
           <li><a href='/#' className='footer-texts instagram'> <AiOutlineInstagram /> </a></li>
        </ul>
                
            </div>
            <div>
                    <ul>
                    <li> <a href='/#' className='footer-texts'>About Us</a></li>
                    <li>  <a href='/#' className='footer-texts'>Contact</a></li>
                    <li>  <a href='/#' className='footer-texts'>Blog</a></li>
                    </ul>
            </div>
            <div>
              <ul>
                <li> <a href='/#' className='footer-texts'>Careers</a></li>
                <li> <a href='/#' className='footer-texts'>Support</a></li>
                <li> <a href='/#' className='footer-texts'>Privacy Policy</a></li>
              </ul>
            </div>
            </div>
            
            <div className='footer-btn'>
                <a href='/#' className='btn nav-btn'>Request Invite</a>
                <p> © Easybank. All Rights Reserved</p>
            </div>
        </footer>
    )}
    
    