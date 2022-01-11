import { createContext, useContext, useState } from 'react';

const context = createContext();

export const { Provider } = context;

export const useCustomContext = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (count, product) => {
    const item = cartItems.find((item) => item.id === product.id);

    if (item) {
      item.count += count;
    } else {
      setCartItems([...cartItems, { ...product, count }]);
    }

    setTotalPrice(totalPrice + product.price * count);
    setTotalQuantity(totalQuantity + count);
  };

  const removeOneFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);

    if (item.count === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      item.count -= 1;
    }

    setTotalPrice(totalPrice - item.price);
    setTotalQuantity(totalQuantity - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  };

  const contextValue = {
    totalPrice,
    totalQuantity,
    cartItems,
    addToCart,
    removeOneFromCart,
    clearCart,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
