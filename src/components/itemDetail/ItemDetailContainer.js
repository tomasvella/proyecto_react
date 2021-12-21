import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';

const ItemDetailContainer = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + productId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [productId]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
