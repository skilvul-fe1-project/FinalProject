import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const SUCCESS_GET_ARTIKEL = "SUCCESS_GET_ARTIKEL";
export const ERROR_FETCHING = "ERROR_FETCHING";

const startFetching = () => {
  return {
    type: START_FETCHING,
  };
};

const successGetArtikel = (data) => {
  return {
    type: SUCCESS_GET_ARTIKEL,
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
      dispatch(startFetching());

      const url = "https://644e67144e86e9a4d8f7c68e.mockapi.io/artikel";
      const response = await axios.get(url);

      dispatch(successGetArtikel(response.data));
    } catch (error) {

      dispatch(errorFetching(error));
    }
  };
};


