import * as api from "../api";
import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
  FETCH_BY_CATEGORY
} from '../constants/actionTypes';

// Action creators
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProducts();

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const addNewProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(product);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchProductsByCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsByCategory(category);

    dispatch({ type: FETCH_BY_CATEGORY, payload: data})
  } catch (error) {
    console.log(error);
  }
}

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id)
  } catch (error) {
    console.log(error)
  }
}

export const outOfStock = (id) => async (dispatch) => {
  try {
    const { data } = await api.outOfStock(id);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
}