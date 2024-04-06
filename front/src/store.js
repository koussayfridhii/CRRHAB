import { configureStore } from "@reduxjs/toolkit";
import colorModeReducer from "./colorModeSlice";
import languageSlice from "./languageSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
    language: languageSlice,
    user: userSlice,
  },
});
