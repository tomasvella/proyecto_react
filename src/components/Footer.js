import '../css/footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-text'>Copyright © 2022 - Viettel Store</div>
      <div className='footer-icons'>
        <ul className='icon-list'>
          <li>
            <Link to='/'>
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <MailIcon />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
