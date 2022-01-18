import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { queryContainer } from '../../db/queryContainer';
import ItemList from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../../css/container.css';

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    queryContainer(id, setItemList, setLoading);
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
