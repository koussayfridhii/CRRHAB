import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: localStorage.getItem("user"),
  user: localStorage.getItem("user"),
  role: localStorage.getItem("role"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // loginRequest(state) {
    //   state.loading = true;
    //   state.error = null;
    // },
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("user", state.user.token);
      localStorage.setItem("role", state.user.role);
    },
    // loginFailure(state, action) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("role");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
