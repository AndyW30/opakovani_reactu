import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { HomePage } from './components/HomePage';

const App = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
