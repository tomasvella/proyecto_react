import '../css/header.css';

const Header = () => {
  return (
    <header>
      <img src='./viettel.svg' alt='Cart Logo' className='logo' />
      <input type='checkbox' id='nav-toggle' className='nav-toggle' />
      <nav>
        <ul>
          <li>
            <a href='/'>Inicio</a>
          </li>
          <li>
            <a href='/shop'>Tienda</a>
          </li>
          <li>
            <a href='/cart'>Carrito</a>
          </li>
          <li>
            <a href='/contact'>Contacto</a>
          </li>
        </ul>
      </nav>
      <label for='nav-toggle' class='nav-toggle-label'>
        <span></span>
      </label>
    </header>
  );
};

export default Header;
