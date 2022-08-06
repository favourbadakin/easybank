import React from 'react';
import icon1 from './images/icon-online.svg';
import icon2 from './images/icon-budgeting.svg';
import icon3 from './images/icon-onboarding.svg';
import icon4 from './images/icon-api.svg';


export default function Reasons(){
    return(
<section className='reasons-section'>
    <div>
        <h2  className='why'>Why choose Easybank?</h2>
        <p className='why-p'>We leverage Open Banking to turn your bank
             account into your financial hub. 
            Control your finances like never before.</p>
    </div>
<div className='reasons'>
    <div>
    <img src={icon1} className='icon' alt='icon' />
    <h3 className='reasons-title'>Online Banking</h3>
    <p className='reasons-p'>Our modern web and mobile applications allow you to keep 
        track of your finances wherever you are in the world.</p>
</div>
<div>
    <img src={icon2} className='icon' alt='icon' />
    <h3 className='reasons-title'>Simple Budgeting</h3>
    <p className='reasons-p'>See exactly where your money goes each month. 
Receive notifications when you're close to hitting your limits. </p>
</div>
<div>
    <img src={icon3} className='icon' alt='icon' />
    <h3 className='reasons-title'>Fast Onboarding</h3>
    <p className='reasons-p'>We don't do branches. Open your account in minutes 
        online and start taking control of your finances right away.</p>
</div>
<div>
    <img src={icon4} className='icon' alt='icon' />
    <h3 className='reasons-title'>Open API</h3>
    <p className='reasons-p'>Manage your savings, investments, pension, and much more from one
         account. Tracking your money has never been easier.</p>
</div>
</div>
</section>
)}
