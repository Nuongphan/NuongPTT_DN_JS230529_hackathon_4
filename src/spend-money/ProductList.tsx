import React from "react";
import "../index.css";
interface ProductItemProps {
  product: Product;
  addToCart: () => void;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}
function ProductItem({ product, addToCart }: ProductItemProps) {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <div className="title">{product.name}</div>
      <div className="price">{product.price.toLocaleString()}</div>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default ProductItem;
