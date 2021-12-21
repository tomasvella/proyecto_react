import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../../css/container.css';

const ItemListContainer = ({ greetings }) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItemList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1>{greetings}</h1>
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
