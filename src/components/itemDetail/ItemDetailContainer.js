import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchProduct = () => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return loading ? (
    <Box>
      <CircularProgress color='inherit' />
    </Box>
  ) : (
    <ItemDetail product={product} />
  );
};

export default ItemDetailContainer;
