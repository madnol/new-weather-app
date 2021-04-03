import {
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from "../actions/actionTypes";

const initState = {
  loading: false,
  results: {},
  error_msg: "",
};

const searchReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: payload,
        error_msg: "",
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
        results: {},
        error_msg: "",
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loding: false,
        results: {},
        error_msg: "Not found",
      };

    default:
      return state;
  }
};

export default searchReducer;
