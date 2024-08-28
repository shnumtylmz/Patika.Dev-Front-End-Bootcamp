import React, { useContext, useState, useEffect } from 'react';
import { MoneyContext } from '../components/Context';
import '../css/card-template.css';
import data from '../data';

function Product({ quantities, setQuantities }) {
  const { money, setMoney } = useContext(MoneyContext);

  useEffect(() => {
    const initialQuantities = data.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, []);

  const handleBuy = (id, price) => {
    const currentQuantity = quantities[id] || 0;
    const newQuantity = currentQuantity + 1;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: newQuantity
    }));
    setMoney(money - price);
  };

  const handleSell = (id, price) => {
    const currentQuantity = quantities[id] || 0;
    if (currentQuantity > 0) {
      const newQuantity = currentQuantity - 1;
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: newQuantity
      }));
      setMoney(money + price);
    }
  };

  const handleInputChange = (id, value) => {
    const numericValue = Number(value);
    const currentQuantity = quantities[id] || 0;
    const difference = numericValue - currentQuantity;
    const itemPrice = data.find(item => item.id === id)?.price || 0;

    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: numericValue
    }));
    setMoney(money - difference * itemPrice);
  };

  return (
    <div className="card-list">
      {data.map(item => (
        <div key={item.id} className="card">
          <img className="card-img" src={item.picture} alt={item.title} />
          <p>{item.title}</p>
          <p className="bold">${item.price}</p>
          <div className="card-btn">
            <button 
              className="sell-btn" 
              onClick={() => handleSell(item.id, item.price)} 
              disabled={quantities[item.id] <= 0}
            >
              Sell
            </button>
            <input 
              type="number"
              value={quantities[item.id] || '0'}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
              min="0"
            />
            <button 
              className="buy-btn" 
              onClick={() => handleBuy(item.id, item.price)}
              disabled={money < item.price}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
