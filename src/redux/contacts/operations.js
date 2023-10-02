import { createAsyncThunk } from '@reduxjs/toolkit';
import { herokuApi } from 'redux/auth/operations';
// import axios from 'axios';

// const contacts = axios.create({
//   // baseURL: 'https://65157a0edc3282a6a3ce7a6f.mockapi.io/contacts/',
//   // baseURL: 'https://connections-api.herokuapp.com/',
//   baseURL: 'https://connections-api.herokuapp.com/contacts/',
// });

export const getContactsThunk = createAsyncThunk(
  'getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await herokuApi.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (data, thunkAPI) => {
    try {
      const response = await herokuApi.post('contacts', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await herokuApi.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
