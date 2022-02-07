import { NavLink } from 'react-router-dom';
import { useCustomContext } from './context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../css/header.css';

const Header = ({ links }) => {
  const { cartItems } = useCustomContext();
  return (
    <header>
      <NavLink to='/'>
        <img src='../viettel.svg' alt='Cart Logo' className='logo' />
      </NavLink>
      <input type='checkbox' id='nav-toggle' className='nav-toggle' />
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            );
          })}

          {cartItems.length > 0 ? (
            <li>
              <NavLink to='/cart'>
                <ShoppingCartIcon />
                <span className='cart-count'>{cartItems.length}</span>
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
      <label htmlFor='nav-toggle' className='nav-toggle-label'>
        <span></span>
      </label>
    </header>
  );
};

export default Header;
