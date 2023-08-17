import React from "react";
import "../index.css";

interface CartProps {
  cartProducts: CartProduct[];
  closeCart: () => void;
  changeQuantity: (key: number, quantity: number) => void;
  total: number;
}

interface CartProduct extends Product {
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

function Cart({ cartProducts, closeCart, changeQuantity, total }: CartProps) {
  return (
    <div className="card">
      <h1>Cart</h1>
      <ul className="listCard">
        {cartProducts.map((product, key) => (
          <li key={key}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>{product.name}</div>
            <div>{product.price.toLocaleString()}</div>
            <div>
              <button onClick={() => changeQuantity(key, product.quantity - 1)}>
                -
              </button>
              <div className="count">{product.quantity}</div>
              <button onClick={() => changeQuantity(key, product.quantity + 1)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="checkOut">
        <div className="total">{total.toLocaleString()}</div>
        <div className="closeShopping" onClick={closeCart}>
          Close
        </div>
      </div>
    </div>
  );
}

export default Cart;
