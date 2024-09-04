import axios from 'axios';
export const POST_CREATE_EMAIL = 'POST_CREATE_EMAIL';
export const POST_CREATE_EMAIL_SUCCESS = 'POST_CREATE_EMAIL_SUCCESS';
export const POST_CREATE_EMAIL_FAIL = 'POST_CREATE_EMAIL_FAIL';
export const POST_CREATE_EMAIL_RESET = 'POST_CREATE_EMAIL_RESET';

export const postCreateEmail = (params) => {
  return {
    type: POST_CREATE_EMAIL,
    params,
  };
};

export const postCreateEmailSuccess = (response) => {
  return {
    type: POST_CREATE_EMAIL_SUCCESS,
    response,
  };
};

export const postCreateEmailFail = (response) => {
  return {
    type: POST_CREATE_EMAIL_FAIL,
    response,
  };
};

export const postCreateEmailReset = () => {
  return {
    type: POST_CREATE_EMAIL_RESET,
  };
};

export const postCreateEmailApi = (data) => {
  return (dispatch) => {
    dispatch(postCreateEmail());
    axios
      .post(`/user/create-email`, data)
      .then((response) => {
        const postCreateEmailData = response.data;
        dispatch(postCreateEmailSuccess(postCreateEmailData));
      })
      .catch((error) => {
        const errorData = error.response.data;
        dispatch(postCreateEmailFail(errorData));
      });
  };
};
