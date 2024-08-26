import PropTypes from 'prop-types';
import '../css/invoice.css';

function Invoice({ purchasedProducts = [] }) {
    // purchasedProducts'ın bir dizi olduğunu varsayıyoruz
    const totalAmount = Array.isArray(purchasedProducts)
        ? purchasedProducts.reduce(
              (total, product) => total + (product.price || 0) * (product.quantity || 0),
              0
          )
        : 0;

    return (
        <div className="invoice-container">
            <h2>Invoice</h2>
            {purchasedProducts.length === 0 ? (
                <p>No products purchased yet.</p>
            ) : (
                <div>
                    <ul>
                        {purchasedProducts.map((product, index) => (
                            <li key={index} className="invoice-item">
                                <span>{product.title}</span>
                                <span>${(product.price || 0).toFixed(2)} x {product.quantity || 0}</span>
                                <span>${((product.price || 0) * (product.quantity || 0)).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="invoice-total">
                        <strong>Total: </strong>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

Invoice.propTypes = {
    purchasedProducts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ),
};

export default Invoice;
