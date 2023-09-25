import React from 'react';
import './index.css';
import { Header } from '../Header';
import { Products } from '../Products';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main className="lowerContainer">
        <div className="textAboveProducts">
          <h1 className="heading">Aktuální nabídka</h1>
          <p className="normalText">
            Nejnovější prémiové produkty od předních českých designérů. Doprava
            zdarma až k Vám domů, na cenu nehleďte.
          </p>
        </div>
        <Products />
      </main>
    </div>
  );
};
