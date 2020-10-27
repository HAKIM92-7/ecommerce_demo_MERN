import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';
import ProductCard from './ProductCard';
import './ProductProfile.css';
import {
  clearProduct,
  getProductsBySeller,
  addToBasket,
} from '../../redux/actions/productActions';
import { getShopByID } from '../../redux/actions/shopActions';

const ProductProfile = () => {
  const [quantityToOrder, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const seller = useSelector((state) => state.authSeller.seller);

  return !product ? (
    <Spinner />
  ) : (
    <Fragment>
      <div
        className='productdetails'
        style={{ display: 'flex', marginBottom: '20px' }}
      >
        <img
          src={product.images.image1}
          alt='image non loaded'
          style={{ height: '600px', width: '400 px', marginRight: '20px' }}
        />
        <div class='card'>
          <div class='card-header'>{product.title}</div>
          <div class='card-body'>
            <h4 class='card-title'>
              {' '}
              by{' '}
              <Link
                to='/shopToPublic'
                onClick={() => {
                  dispatch(getShopByID(product.seller));
                  dispatch(getProductsBySeller(product.seller));
                }}
              >
                {product.shop.nameofshop}
              </Link>
            </h4>
            <h5 class='card-title'>{product.technicalsheet}</h5>
            <p class='card-text'>{product.description}</p>
            <br />
            <h5>
              Quantity{' '}
              <span class='badge badge-secondary'>{product.quantity}</span>
            </h5>
            <br />
            {!seller ? (
              <div class='buttons'>
                <button
                  class='plus'
                  onClick={() => {
                    if (quantityToOrder < product.quantity)
                      setQuantity(quantityToOrder + 1);
                  }}
                >
                  +
                </button>{' '}
                <input
                  type='number'
                  id='inp2'
                  class='inp'
                  value={quantityToOrder}
                />
                <button
                  class='moins'
                  onClick={() => {
                    if (quantityToOrder > 1) setQuantity(quantityToOrder - 1);
                  }}
                >
                  -
                </button>
              </div>
            ) : (
              ''
            )}
            <br /> <br />
            <h4>
              Price{' '}
              <span class='badge badge-secondary'>{product.price} DT</span>
            </h4>
            <br /> <br /> <i class='fas fa-table'></i> created at :
            <Moment format='YYYY/MM/DD'>{`${product.register_date}`}</Moment>{' '}
            <br />
            <br />
            <br />
            {!seller ? (
              <button
                type='button'
                class='btn btn-primary'
                onClick={() =>
                  dispatch(
                    addToBasket(
                      product,
                      quantityToOrder,
                      quantityToOrder * product.price
                    )
                  )
                }
              >
                Add to basket
              </button>
            ) : (
              <Link to='/update-product' class='btn btn-warning'>
                Edit Product
              </Link>
            )}
            <br />
            <br />
            <br />
            <Link
              to='/'
              onClick={() => {
                dispatch(clearProduct());
              }}
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductProfile;
