import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greetings }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItemList(data);
      });
  }, []);

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList itemList={itemList} />
    </div>
  );
};

export default ItemListContainer;
