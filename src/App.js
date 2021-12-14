import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import './css/app.css';

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greetings={'Bienvenido'} />
      <Footer />
    </>
  );
};

export default App;
