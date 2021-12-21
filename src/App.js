import Header from './components/Header';
// import Footer from './components/Footer';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
// import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ItemListContainer greetings={'Bienvenido'} />
      <ItemDetailContainer productId={9} />
      {/* <ItemCount stock={100} initial={1} /> */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
