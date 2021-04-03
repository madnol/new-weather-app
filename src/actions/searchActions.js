import { SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_FAIL } from "./actionTypes";
import { searchCity } from "../Api/SearchApi";

export const searchResult = search => async dispatch => {
  try {
    dispatch({
      type: SEARCH_LOADING,
    });

    const res = await searchCity(search);
    if (res) {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res,
      });
    } else throw Error;
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
    });
  }
};
