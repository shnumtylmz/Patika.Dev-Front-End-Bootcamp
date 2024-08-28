import React, { useContext } from 'react';
import { MoneyContext } from '../components/Context';
import data from '../data';
import '../css/invoice.css'

function Invoice({ quantities }) {
    const { money } = useContext(MoneyContext);

    const total = Object.keys(quantities).reduce((acc, id) => {
        const item = data.find(product => product.id === parseInt(id));
        return acc + (item.price * quantities[id]);
    }, 0);

    return (
        <div className="invoice">
            <h1>Invoice</h1>
            <h2>Total: ${total}</h2>
            <div>
                {Object.keys(quantities).map(id => {
                    const item = data.find(product => product.id === parseInt(id));
                    const quantity = quantities[id];
                    if (quantity > 0) {
                        return (
                            <div key={id} className="invoice-item">
                                <p>{item.title}</p>
                                <p>{quantity} x ${item.price} = ${quantity * item.price}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default Invoice;
