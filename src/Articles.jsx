import React from 'react';
import Picture1 from './images/image-currency.jpg';
import Picture2 from './images/image-restaurant.jpg';
import Picture3 from './images/image-plane.jpg';
import Picture4 from './images/image-confetti.jpg';

export default function Articles(){
    return(
        <section className='articles-section'>
            <h2>Latest Articles</h2> 
            <div className='articles'>
            <div className='card'>
                <img className='card-img' src={Picture1} alt='money' />
                <div className='card-box'>
                <h5 className='author'>By Claire Robinson</h5>
                <h3 className='card-topic'><a href='/#' className='card-link'>Receive money in any currency with no fees</a></h3>
                <p className='card-text'>The world is getting smaller and we're becoming more mobile.
                    So why should you be forced to only receive money in a single …</p>
            </div>
            </div>
            <div className='card'>
                <img className='card-img' src={Picture2} alt='confetti' />
                <div className='card-box'>
                <h5 className='author'>By Wilson Hutton</h5>
                <h3 className='card-topic'><a href='/#' className='card-link'>Treat yourself without worrying about money</a></h3>
                <p className='card-text'>Our simple budgeting feature allows you to separate out your 
                    spending and set realistic limits each month.
                     That means you …</p>
            </div>
            </div>
            <div className='card'>
                <img className='card-img' src={Picture3} alt='sky' />
                <div className='card-box'>
                <h5 className='author'>By Wilson Hutton</h5>
                <h3 className='card-topic'><a href='/#' className='card-link'>Take your Easybank card wherever you go</a></h3>
                <p className='card-text'>We want you to enjoy your travels. 
                    This is why we don't charge any fees on purchases while you're abroad. 
                    We'll even show you …</p>
            </div>
            </div>
            <div className='card'>
                <img className='card-img' src={Picture4} alt='stars' />
                <div className='card-box'>
                <h5 className='author'>By Claire Robinson</h5>
                <h3 className='card-topic'><a href='/#' className='card-link'>Our invite-only Beta accounts are now live!</a></h3>
                <p className='card-text'>After a lot of hard work by the whole team, 
                    we're excited to launch our closed beta. 
                    It's easy to request an invite through the site ... </p>
            </div>
            </div>
            </div>
        </section>
    )}