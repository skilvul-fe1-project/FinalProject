import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA";
export const ERROR_FETCHING = "ERROR_FETCHING";

const startFetching = () => {
  return {
    type: START_FETCHING,
  };
};

const successGetData = (data) => {
  return {
    type: SUCCESS_GET_DATA,
    payload: data,
  };
};

const errorFetching = (error) => {
  return {
    type: ERROR_FETCHING,
    payload: error,
  };
};

export const getData = () => {
  return async (dispatch) => {
    try {
      // Mulai loading
      dispatch(startFetching());

      // Panggil API
      const url = "https://644e67144e86e9a4d8f7c68e.mockapi.io/artikel";
      const response = await axios.get(url);

      // Kirim data ke reducer
      dispatch(successGetData(response.data));
    } catch (error) {
      // Tangani kesalahan jika terjadi
      dispatch(errorFetching(error));
    }
  };
};
