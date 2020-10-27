import { GET_SHOP, SHOP_FAIL, CLEAR_SHOP, GET_SHOPS } from './types';

import axios from 'axios';
import { setAlert } from './alertActions';
import { clearSellerProducts } from './productActions';

// create or edit a profile

export const createShop = (formData, history, edit = false) => async (
  dispatch,
  getState
) => {
  try {
    const res = await axios.post('api/shop', formData, tokenConfig(getState));

    dispatch({
      type: GET_SHOP,
      payload: res.data,
    });
    history.push('/dashboard');
    dispatch(setAlert(edit ? 'Shop updated' : 'Shop created', 'success'));
  } catch (err) {
    const errors = err.message.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger'));
      });

      dispatch({
        type: SHOP_FAIL,
        payload: { msg: err.response.statusText, error: err.response.status },
      });
    }
  }
};

// GET CURRENT SHOP

export const getCurrentShop = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('api/shop/me', tokenConfig(getState));

    dispatch({
      type: GET_SHOP,

      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SHOP_FAIL,
      payload: { msg: err.response.statusText, error: err.response.status },
    });
  }
};

// GET ALL SHOPS

export const getAllShops = () => async (dispatch) => {
  try {
    dispatch(clearShop());
    dispatch(clearSellerProducts());
    const res = await axios.get('api/shop');

    dispatch({
      type: GET_SHOPS,

      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SHOP_FAIL,
      payload: { msg: err.message.statusText, error: err.message.status },
    });
  }
};

// GET SHOP by seller ID

export const getShopByID = (sellerId) => async (dispatch) => {
  try {
    const res = await axios.get(`api/shop/seller/${sellerId}`);

    dispatch({
      type: GET_SHOP,

      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SHOP_FAIL,
      payload: { msg: err.response.statusText, error: err.response.status },
    });
  }
};

// CLEAR THE SHOP

export const clearShop = () => (dispatch) => {
  dispatch({ type: CLEAR_SHOP });
};

// setup config/headers and token-------------------------------------------------------------------------------------------------------------------

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};
