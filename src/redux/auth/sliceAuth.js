import { LoginThunk, registerThunk } from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  error: '',
};
const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(registerThunk.fulfilled, LoginThunk.fulfilled),
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
  },
});
export const authReduser = slice.reducer;
