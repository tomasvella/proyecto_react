import Item from './Item';

const ItemList = ({ itemList }) => {
  return (
    <div>
      <h1>Lista de productos</h1>
      {itemList.map((item) => {
        return (
          <>
            <Item
              className='card-widget'
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          </>
        );
      })}
    </div>
  );
};

export default ItemList;
