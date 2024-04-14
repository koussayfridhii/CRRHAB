import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: localStorage.getItem("user"),
  user: null,
  role: null,
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
    },
    // loginFailure(state, action) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
