import {
  LoginThunk,
  LogoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  error: '',
  isRefresh: false,
  // loading: false,
};
const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(LogoutThunk.fulfilled, state => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload?.name;
        state.user.email = payload?.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
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
