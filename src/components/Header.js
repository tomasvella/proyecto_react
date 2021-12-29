import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../css/header.css';

const Header = ({ links }) => {
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
              <li>
                <NavLink key={link.id} to={link.path}>
                  {link.name}
                </NavLink>
              </li>
            );
          })}
          <li>
            <NavLink to='/cart'>
              <ShoppingCartIcon />
            </NavLink>
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
