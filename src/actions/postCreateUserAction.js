import axios from 'axios';
export const POST_CREATE_USER = 'POST_CREATE_USER';
export const POST_CREATE_USER_SUCCESS = 'POST_CREATE_USER_SUCCESS';
export const POST_CREATE_USER_FAIL = 'POST_CREATE_USER_FAIL';
export const POST_CREATE_USER_RESET = 'POST_CREATE_USER_RESET';

export const postCreateUser = (params) => {
  return {
    type: POST_CREATE_USER,
    params,
  };
};

export const postCreateUserSuccess = (response) => {
  return {
    type: POST_CREATE_USER_SUCCESS,
    response,
  };
};

export const postCreateUserFail = (response) => {
  return {
    type: POST_CREATE_USER_FAIL,
    response,
  };
};

export const postCreateUserReset = () => {
  return {
    type: POST_CREATE_USER_RESET,
  };
};

export const postCreateUserApi = (data) => {
  return (dispatch) => {
    dispatch(postCreateUser());
    axios
      .post(`/user`, data)
      .then((response) => {
        const postCreateUserData = response.data;
        dispatch(postCreateUserSuccess(postCreateUserData));
      })
      .catch((error) => {
        const errorData = error.response.data;
        dispatch(postCreateUserFail(errorData));
      });
  };
};
