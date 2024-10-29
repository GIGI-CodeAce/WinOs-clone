import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './winFooter';
import { Desktop } from './Desktop/mainDesk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Desktop/>
    <Footer/>
  </>

);
