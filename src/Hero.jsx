import React from 'react';
import heroImg from './images/images-mockup.png';
import img from './images/image-mockupss.png'
import desktop from  './images/bg-intro-desktop.svg';


export default function Hero(){
    return(
        <section className='hero'>
        <div className='hero-section'>
            <img className='hero-box' src={heroImg} alt="hero-box" />
            <img className='hero-img' src={img} alt="hero-box" />
        </div>
        <div className='hero-new'>
        <div className='hero-text'>
            <h2 className='hero-h2'>Next generation digital banking</h2>
            <p className='hero-p'>
                Take your financial life online.
                 Your Easybank account will be a one-stop-shop for 
                 spending, saving, budgeting, investing, and much more.
                 </p>
                 <a className='btn hero-btn' href='/#'>Request Invite</a>
        </div>
        

        <div>
            
        <img className='desk-img' src={desktop} alt="desktop" />
        </div>
        <div>
            <img className='hero-img' src={img} alt="hero-box" />
        </div>
        </div>
        </section>
    )
}
