import { useState } from 'react';

const ItemCount = ({ available }) => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(available);

  const increment = () => {
    if (stock > 0) {
      setCount(count + 1);
      setStock(stock - 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setStock(stock + 1);
    }
  };

  return (
    <div>
      <p>Procesador - Stock: {stock}</p>
      <p>Cantidad: {count}.</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default ItemCount;
