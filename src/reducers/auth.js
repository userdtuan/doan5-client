import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.ERROR_SIGNUP:
      localStorage.setItem("error", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        loading: false,
        errors: action.data,
      };
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    case actionType.UPDATE_DETAIL:
      localStorage.clear();
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      window.location.reload();
      return { ...state, authData: action.data, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
