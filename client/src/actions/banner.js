import * as api from "../api";

export const getBanner = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.getBanner();

    dispatch({ type: "GET_ALL", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const addBanner = (banner) => async (dispatch) => {
  try {
    const { data } = await api.addBanner(banner);

    dispatch({ type: "CREATE_NEW", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBanner = (id) => async (dispatch) => {
    try {
      await api.deleteBanner(id)
    } catch (error) {
      console.log(error)
    }
  }
  
