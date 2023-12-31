import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const herokuApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

// Utility to add JWT
const setToken = token => {
  herokuApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearToken = () => {
  herokuApi.defaults.headers.common.Authorization = '';
};

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
      setToken(data.token);
      alert('Congratulations! You have successfully registered!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await herokuApi.post('/users/login', credentials);
      setToken(data.token);
      alert('You have successfully logged in!');
      return data;
    } catch (error) {
      alert('Incorrect email or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await herokuApi.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;

  if (!savedToken) return thunkAPI.rejectWithValue('You need log in!');

  try {
    setToken(savedToken);
    const { data } = await herokuApi.get('users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
