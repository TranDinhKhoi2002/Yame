import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuth: localStorage.getItem("user") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      localStorage.setItem(
        "user",
        JSON.stringify({
          userName: action.payload.userName,
          password: action.payload.password,
        })
      );
    },
    logout(state) {
      state.isAuth = false;
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
