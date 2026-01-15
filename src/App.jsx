import './App.css'
import ProductList from './component/productList'
import { CartProvider } from './context/CartContext'
import Cart from './component/cart'

function App() {

  return (
    <main>
      <CartProvider>
        <Cart />
        <div className="container">
          <ProductList />
        </div>
      </CartProvider>
    </main>
  );
}

export default App
