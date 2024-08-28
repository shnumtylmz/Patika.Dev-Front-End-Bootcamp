import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Money from './components/Money';
import Product from './components/Product';
import { MoneyProvider } from './components/Context';
import Invoice from './components/Invoice';
import data from './data';

function App() {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = data.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, []);

  return (
    <>
      <Header />
      <MoneyProvider>
        <Money />
        <Product quantities={quantities} setQuantities={setQuantities} />
        <Invoice quantities={quantities} />
      </MoneyProvider>
    </>
  );
}

export default App;
