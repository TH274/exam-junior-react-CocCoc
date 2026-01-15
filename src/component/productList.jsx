import { products } from '../constants';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(p => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
};  

export default ProductList;
