import React, { useState } from "react";
import "./App.css";
import Cart from "./spend-money/Cart";
import ProductItem from "./spend-money/ProductList";
import { AiOutlineShoppingCart } from "react-icons/ai";
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface CartProduct extends Product {
  quantity: number;
}
const products: Product[] = [
  {
    id: 1,
    name: "PIZA",
    image:
      "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/slider11.png",
    price: 120000,
  },
  {
    id: 2,
    name: "SOUP",
    image:
      "https://www.seekpng.com/png/full/303-3035706_bbq-chicken-plate-barbecue-chicken.png",

    price: 120000,
  },
  {
    id: 3,
    name: "CHICKEN",
    image: "https://suicao.net/wp-content/uploads/2023/01/product-07.png",
    price: 120000,
  },
  {
    id: 4,
    name: "SALAD",
    image:
      "https://fruteriaonlinemadrid.es/wp-content/webp-express/webp-images/uploads/2021/11/ensaladas.jpg.webp",
    price: 120000,
  },
  {
    id: 5,
    name: "SPAGETTI",
    image:
      "https://png.pngtree.com/background/20230520/original/pngtree-a-plate-of-spaghetti-with-meatballs-topped-grated-parmesan-cheese-and-picture-image_2671781.jpg",
    price: 120000,
  },
  {
    id: 6,
    name: "SALMON SALAD ",
    image:
      "https://cdn.dep365.com/wp-content/uploads/2021/08/3.Tuong-tu-nhu-ca-hoi-bo-cung-chua-axit-beo-omega-3-nhung-no-la-mot-loai-cu-the-thuong-duoc-tim-thay-trong-thuc-vat..jpg?strip=all&lossy=1&quality=90&webp=90&avif=60&ssl=1",
    price: 120000,
  },
];
function App() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (key: number) => {
    const existingProduct = cartProducts.find(
      (product) => product.id === products[key].id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const newProduct: CartProduct = { ...products[key], quantity: 1 };
      setCartProducts([...cartProducts, newProduct]);
    }

    reloadCart();
  };

  const changeQuantity = (key: number, newQuantity: number) => {
    if (newQuantity === 0) {
      const updatedCartProducts = cartProducts.filter(
        (_, index) => index !== key
      );
      setCartProducts(updatedCartProducts);
    } else {
      const updatedCartProducts = cartProducts.map((product, index) =>
        index === key ? { ...product, quantity: newQuantity } : product
      );
      setCartProducts(updatedCartProducts);
    }

    reloadCart();
  };
  const calculateTotalPrice = () => {
    return cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  const reloadCart = () => {
    // Calculate total price, quantity
  };

  return (
    <div className={`container ${isCartOpen ? "active" : ""}`}>
      <header>
        <h1>Your Shopping Cart</h1>
        <div className="shopping" onClick={openCart}>
          <AiOutlineShoppingCart
            size={32}
            color="black"
            className="custom-icon"
          />

          <span className="quantity">
            {cartProducts.reduce(
              (total, product) => total + product.quantity,
              0
            )}
          </span>
        </div>
      </header>

      <div className="list">
        {products.map((product, key) => (
          <ProductItem
            key={key}
            product={product}
            addToCart={() => addToCart(key)}
          />
        ))}
      </div>

      {/* Cart component */}
      <Cart
        cartProducts={cartProducts}
        closeCart={closeCart}
        changeQuantity={changeQuantity}
        total={calculateTotalPrice()}
      />
      {/* Render cart content*/}
    </div>
  );
}

export default App;
