import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../../css/container.css';

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const setFetchUrl = () => {
    if (id !== undefined) {
      return 'https://fakestoreapi.com/products/category/' + id;
    } else {
      return 'https://fakestoreapi.com/products';
    }
  };

  const fetchProducts = () => {
    fetch(setFetchUrl())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItemList(data);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  return (
    <div className='container'>
      {loading ? (
        <Box>
          <CircularProgress color='inherit' />
        </Box>
      ) : (
        <ItemList itemList={itemList} />
      )}
    </div>
  );
};

export default ItemListContainer;
