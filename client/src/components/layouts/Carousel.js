import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Carousel = () => {
  return (
    <Fragment>
      <div
        id='carouselExampleIndicators'
        class='carousel slide'
        data-ride='carousel'
      >
        <ol class='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            class='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div class='carousel-inner active'>
          <div class='carousel-item active'>
            <img
              src='https://cristianlay.com/tn/media/catalog/category/categoria-bisuteria.png'
              style={{ height: '300px' }}
              class='d-block w-100'
              alt='...'
            />
          </div>
          <div class='carousel-item'>
            <img
              src='https://i.pinimg.com/originals/22/e4/56/22e456b3aca1fe9574092be81ef78fe0.jpg'
              style={{ height: '300px' }}
              class='d-block w-100'
              alt='...'
            />
          </div>
          <div class='carousel-item'>
            <img
              src='https://cristianlay.com/blog/tn/wp-content/uploads/sites/5/2018/02/como-comprar-CRISTIAN-LAY.jpg'
              style={{ height: '300px' }}
              class='d-block w-100'
              alt='...'
            />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Carousel;
