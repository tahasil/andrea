// Import necessary functions and modules from '@reduxjs/toolkit' and local files
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

// Create a Redux store using configureStore function
// The reducer argument specifies the root reducer for the store
export const store = configureStore({ reducer: rootReducer });
