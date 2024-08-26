import { useState, useEffect } from "react";
import productsData from '../products';
import '../css/card-template.css';
import Invoice from './Invoice';

function Money() {
    const [totalMoney, setTotalMoney] = useState(100000000000);
    const [productQuantities, setProductQuantities] = useState({});
    const [purchasedProducts, setPurchasedProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('purchasedProducts')) || [];
        setPurchasedProducts(storedProducts);
        

        const quantities = {};
        storedProducts.forEach(product => {
            quantities[product.id] = product.quantity;
        });
        setProductQuantities(quantities);
    }, []);

    const handleBuy = (productId) => {
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const handleSell = (productId) => {
        setProductQuantities(prevQuantities => {
            const newQuantity = (prevQuantities[productId] || 0) - 1;
            return {
                ...prevQuantities,
                [productId]: Math.max(newQuantity, 0)
            };
        });
    };

    const adjustMoney = (product, operation) => {
        const adjustment = product.price;
        setTotalMoney(prevMoney => 
            operation === 'buy' 
                ? prevMoney - adjustment 
                : prevMoney + adjustment
        );
    };

    const buyProduct = (product) => {
        adjustMoney(product, 'buy');
        setPurchasedProducts(prevProducts => {
            const existingProduct = prevProducts.find(p => p.id === product.id);
            let updatedProducts;

            if (existingProduct) {
                updatedProducts = prevProducts.map(p => 
                    p.id === product.id 
                        ? { ...p, quantity: p.quantity + 1 } 
                        : p
                );
            } else {
                updatedProducts = [...prevProducts, { ...product, quantity: 1 }];
            }

            localStorage.setItem('purchasedProducts', JSON.stringify(updatedProducts));

            return updatedProducts;
        });
    };

    const sellProduct = (product) => {
        if (productQuantities[product.id] > 0) {
            adjustMoney(product, 'sell');
            handleSell(product.id);
            setPurchasedProducts(prevProducts => {
                const existingProduct = prevProducts.find(p => p.id === product.id);
                let updatedProducts;

                if (existingProduct && existingProduct.quantity > 1) {
                    updatedProducts = prevProducts.map(p => 
                        p.id === product.id 
                            ? { ...p, quantity: p.quantity - 1 } 
                            : p
                    );
                } else {
                    updatedProducts = prevProducts.filter(p => p.id !== product.id);
                }

                localStorage.setItem('purchasedProducts', JSON.stringify(updatedProducts));

                return updatedProducts;
            });
        }
    };

    const combineBuyOption = (product) => {
        handleBuy(product.id);
        buyProduct(product);
    };

    const combineSellOption = (product) => {
        sellProduct(product);
    };

    const handleInputChange = (e, product) => {
        const newQuantity = parseInt(e.target.value);
        const previousQuantity = productQuantities[product.id] || 0;

        if (newQuantity >= 0) {
            const difference = newQuantity - previousQuantity;
            setProductQuantities(prevQuantities => ({
                ...prevQuantities,
                [product.id]: newQuantity
            }));
            setTotalMoney(prevMoney => prevMoney - difference * product.price);
        }
    };

    return (
        <div className="product-list-container">
            <h2 className="total-money">${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            
            <div className="products-flex">
                {productsData.map(product => (
                    <div className="card" key={product.id}>
                        <img src={product.picture} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.price}$</p>
                        <button 
                            onClick={() => combineSellOption(product)} 
                            className="sell-btn"
                            disabled={(productQuantities[product.id] || 0) === 0}
                        >
                            Sell
                        </button>
                        <input
                            type="number"
                            className="card-input"
                            value={productQuantities[product.id] || 0}
                            onChange={(e) => handleInputChange(e, product)}
                        />
                        <button 
                            onClick={() => combineBuyOption(product)} 
                            className="buy-btn"
                        >
                            Buy
                        </button>
                    </div>
                ))}
            </div>
            
            <Invoice purchasedProducts={purchasedProducts} />
        </div>
    );
}

export default Money;
