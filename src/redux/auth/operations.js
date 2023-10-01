// https://goit-task-manager.herokuapp.com/
// https://connections-api.herokuapp.com/

import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const herokuApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await herokuApi.post('/users/signup', credentials);
      console.log(data);
      // After successful registration, add the token to the HTTP header
      //   setAuthHeader(response.data.token);
      //   toast.success('Congratulations! You have successfully registered!', {
      //     position: 'top-center',
      //   });
      return data;
    } catch (error) {
      //   toast.error('Something went wrong! Try again!', {
      //     position: 'top-center',
      //   });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
