import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price.toLocaleString()} VND</p>
        </div>

        <button className="add-to-cart-btn"
          onClick={() => addToCart(product)}
          aria-label="Add to cart"
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
