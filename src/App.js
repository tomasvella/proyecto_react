import Header from './components/Header';
// import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import './css/app.css';

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greetings={'Bienvenido'} />
      <ItemCount available={100} />
      {/* <Footer /> */}
    </>
  );
};

export default App;
