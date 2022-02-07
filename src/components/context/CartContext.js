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
    const copyCartItems = [...cartItems];
    const itemIndex = copyCartItems.find((item) => item.id === product.id);

    if (itemIndex) {
      itemIndex.count += count;
      itemIndex.totalPrice = itemIndex.count * itemIndex.price;
    } else {
      copyCartItems.push({
        ...product,
        count,
        totalPrice: product.price * count,
      });
    }

    setCartItems(copyCartItems);
    setTotalPrice(totalPrice + product.price * count);
    setTotalQuantity(totalQuantity + count);
  };

  const removeOneFromCart = (id) => {
    const copyCartItems = [...cartItems];
    const itemIndex = copyCartItems.findIndex((item) => item.id === id);
    const item = copyCartItems[itemIndex];

    if (item.count > 1) {
      item.count -= 1;
      item.totalPrice = item.count * item.price;
    } else {
      copyCartItems.splice(itemIndex, 1);
    }

    setCartItems(copyCartItems);
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
