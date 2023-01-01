import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './components/header/Header'
import MainContent from './components/main/MainContent'
import Footer from './components/footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <MainContent/>
      <Footer/>
  </React.StrictMode>
);

reportWebVitals();
