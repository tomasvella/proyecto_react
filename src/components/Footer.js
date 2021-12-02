import '../css/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container__left'>
          <div className='footer__container__left__logo'>
            <img src='/images/logo.png' alt='logo' />
          </div>
          <div className='footer__container__left__text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </p>
          </div>
        </div>
        <div className='footer__container__right'>
          <div className='footer__container__right__title'>
            <h3>Contact Us</h3>
          </div>
          <div className='footer__container__right__content'>
            <div className='footer__container__right__content__item'>
              <i className='fas fa-map-marker-alt'></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quisquam.
              </p>
            </div>
            <div className='footer__container__right__content__item'>
              <i className='fas fa-phone'></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quisquam.
              </p>
            </div>
            <div className='footer__container__right__content__item'>
              <i className='fas fa-envelope'></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
