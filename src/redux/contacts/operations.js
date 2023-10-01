import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contacts = axios.create({
  baseURL: 'https://65157a0edc3282a6a3ce7a6f.mockapi.io/contacts/',
});

export const getContactsThunk = createAsyncThunk(
  'getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await contacts.get('contacts');
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
      const response = await contacts.post('contacts', data);
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
      const { data } = await contacts.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
