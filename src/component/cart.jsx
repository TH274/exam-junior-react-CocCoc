import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="cart-wrapper">
      <button
        className="cart-button"
        onClick={() => setOpen(!open)}
      >
        Giỏ hàng <FaShoppingCart />
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </button>

      {open && (
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p className="cart-empty">Giỏ hàng trống</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>
                    Thành tiền: {item.price.toLocaleString()} x 1 ={' '}{item.price.toLocaleString()} VND
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
