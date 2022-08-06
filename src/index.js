import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import Hero from './Hero';
import Reasons from './Reasons';
import Footer from './Footer';
import Articles from './Articles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Reasons />
    <Articles />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
