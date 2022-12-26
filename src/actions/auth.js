import { AUTH, ERROR_SIGNUP,UPDATE_DETAIL } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    console.log(data);

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const googleSignin = (result, token, router) => async (dispatch) => {
  const param = {
    result,
    token,
  };

  try {
    const { data } = await api.googleSignIn(param);

    dispatch({ type: AUTH, data });
    // console.log(data);

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error.response.data.message);
    // const {err} = error.response.data.messages;
    const { err } = { a: "a" };
    dispatch({ type: ERROR_SIGNUP, err });
    // dispatch({ type: AUTH, data });
    // localStorage.setItem('error', JSON.stringify({"a":data}));
  }
};
export const test = (a) => `hello ${a}`;
export const updateUserDetail = (params, router) => async (dispatch) => {
  try {
    
    const {data}  = await api.updateUserDetail(params);
    console.log(data)
    dispatch({ type: UPDATE_DETAIL, data });
  } catch (error) {
    console.log(error);
  }
};
// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: CREATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
