import { setAlert } from './alertActions';
import axios from 'axios';
import {
  ORDER_PASSED,
  ORDER_FAIL,
  ORDER_INFOS_SENT,
  ORDER_INFOS_FAIL,
} from './types';
import { clearBasket } from './productActions';

// Pass an order

export const passAnOrder = (
  listofproducts,
  adress_of_delivery,
  postal_code,
  telephone
) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      'api/commande',
      {
        listofproducts: listofproducts,
        adress_of_delivery,
        postal_code,
        telephone,
      },
      tokenConfig(getState)
    );

    dispatch({
      type: ORDER_PASSED,

      payload: res.data,
    });

    dispatch(setAlert('Order Passed ', 'success'));
    dispatch(clearBasket());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }

    dispatch({
      type: ORDER_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
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
