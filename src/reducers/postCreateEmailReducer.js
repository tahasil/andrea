/*
  This reducer handles state changes related to fetching checked out rentals.
  It listens to action types defined in getCurrentScheduleTimingListAction.js and updates the state accordingly.
*/

import {
  POST_CREATE_EMAIL,
  POST_CREATE_EMAIL_SUCCESS,
  POST_CREATE_EMAIL_FAIL,
  POST_CREATE_EMAIL_RESET,
} from '../actions/postCreateEmailAction';

// Initial state for the reducer
const initialState = {
  apiState: '', // API state (loading, success, error)
  data: null, // Data received from the API
  error: '', // Error message in case of API failure
};

// Reducer function for getCurrentScheduleTimingList
const postCreateEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action type for initiating the API request
    case POST_CREATE_EMAIL:
      return {
        ...state,
        apiState: 'loading', // Set API state to loading
      };
    // Action type for successful API response
    case POST_CREATE_EMAIL_SUCCESS:
      return {
        ...state,
        apiState: 'success', // Set API state to success
        data: action.response.data, // Update data with response data
        message: action.response.message ? action.response.message : 'success', // Update message with response message if available
      };
    // Action type for API failure
    case POST_CREATE_EMAIL_FAIL:
      return {
        ...state,
        apiState: 'error', // Set API state to error
        error: action.response.message ? action.response.message : 'error', // Update error with response message if available
      };
    // Action type for resetting state to initial state
    case POST_CREATE_EMAIL_RESET:
      return initialState; // Reset state to initial state
    // Default case for returning current state if action type doesn't match
    default:
      return state;
  }
};

export default postCreateEmailReducer;
