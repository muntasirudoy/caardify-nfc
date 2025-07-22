import { createSlice } from "@reduxjs/toolkit";

export interface AuthSliceState {
  signedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

const authLocalStorage = JSON.parse(localStorage.getItem("auth") || "{}");

const initialState: AuthSliceState = {
  signedIn: authLocalStorage?.accessToken ? true : false,
  accessToken: authLocalStorage?.accessToken
    ? authLocalStorage?.accessToken
    : null,
  refreshToken: authLocalStorage?.refreshToken
    ? authLocalStorage?.refreshToken
    : null,
};

const authSlice = createSlice({
  name: `session`,
  initialState,
  reducers: {
    signInSuccess(state, action) {
      state.signedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    signOutSuccess(state) {
      state.signedIn = false;
      state.refreshToken = null;
      state.refreshToken = null;
    },
  },
});

export const { signInSuccess, signOutSuccess } = authSlice.actions;
export default authSlice.reducer;
