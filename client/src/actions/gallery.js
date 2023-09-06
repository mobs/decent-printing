import * as api from "../api";
import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
  FETCH_BY_CATEGORY
} from '../constants/actionTypes';

// Action creators
export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getData();

    dispatch({ type: "FETCH_TOTAL", payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const addData = (galleryData) => async (dispatch) => {
  try {
    console.log('abcd')
    const { data } = await api.addData(galleryData);
    console.log(data);


    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    await api.deleteData(id)
  } catch (error) {
    console.log(error)
  }
}

// export const fetchProductsByCategory = (category) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchProductsByCategory(category);

//     dispatch({ type: FETCH_BY_CATEGORY, payload: data})
//   } catch (error) {
//     console.log(error);
//   }
// }
