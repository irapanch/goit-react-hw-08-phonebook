import { LoginThunk, LogoutThunk, registerThunk } from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  error: '',
  // loading: false,
};
const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(LogoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addMatcher(
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
