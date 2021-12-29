import Header from './components/Header';
// import Footer from './components/Footer';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/app.css';

const App = () => {
  const links = [
    { name: 'Inicio', path: '/', id: 1 },
    { name: 'Electrónica', path: 'category/electronics', id: 2 },
    { name: 'Joyería', path: 'category/jewelery', id: 3 },
  ];

  return (
    <BrowserRouter>
      <Header links={links} />
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route
            path='/category/:id'
            element={<ItemListContainer links={links} />}
          />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartWidget />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
