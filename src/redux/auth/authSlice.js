import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: { login: '', isLogin: false },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLogin = true;
    },
    logOut(state) {
      state.login = '';
      state.isLogin = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
