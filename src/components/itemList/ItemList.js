import Item from './Item';
import '../../css/products.css';

const ItemList = ({ itemList }) => {
  return (
    <div className='product-container'>
      {itemList.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
