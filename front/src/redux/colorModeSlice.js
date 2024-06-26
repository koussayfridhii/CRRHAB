import { createSlice } from "@reduxjs/toolkit";
const calculateFontSizes = (size) => ({
  xs: size * 0.75 + "rem",
  ls: size * 0.8 + "rem",
  sm: size * 0.875 + "rem",
  md: size * 1 + "rem",
  lg: size * 1.125 + "rem",
  xl: size * 1.25 + "rem",
  xxl: size * 1.5 + "rem",
  xxxl: size * 1.875 + "rem",
  xxxxl: size * 2.25 + "rem",
  "5xl": size * 3 + "rem",
  "6xl": size * 3.75 + "rem",
  "7xl": size * 4.5 + "rem",
  "8xl": size * 6 + "rem",
  "9xl": size * 8 + "rem",
});
const initialSize = localStorage.getItem("size") || 1;
const lightTheme = {
  colors: {
    white: "#DFF1FF",
    whiteHover: "#F9F871",
    background: "#f8f8f8", // Light background color
    text: "#222222", // Dark text color
    textSecondary: "#718096",
    primary: "#0FA239", // Green for primary elements
    primaryHover: "#008275",
    secondary: "#2F81C4", // Blue for secondary elements
    bgGray: "#E0E1DD", //gray background
    bgTransparentGreen: "#0fa23933",
  },
  fontSizes: {
    xs: initialSize * 0.75 + "rem",
    ls: initialSize * 0.8 + "rem",
    sm: initialSize * 0.875 + "rem",
    md: initialSize * 1 + "rem",
    lg: initialSize * 1.125 + "rem",
    xl: initialSize * 1.25 + "rem",
    xxl: initialSize * 1.5 + "rem",
    xxxl: initialSize * 1.875 + "rem",
    xxxxl: initialSize * 2.25 + "rem",
    "5xl": initialSize * 3 + "rem",
    "6xl": initialSize * 3.75 + "rem",
    "7xl": initialSize * 4.5 + "rem",
    "8xl": initialSize * 6 + "rem",
    "9xl": initialSize * 8 + "rem",
  },
};

const darkTheme = {
  colors: {
    white: "#DFF1FF",
    whiteHover: "#F9F871",
    background: "#1A202C", // Light background color
    text: "#f8f8f8", // Dark text
    textSecondary: "#c3dbe9 ",
    primary: "#0FA239", // Green for primary elements
    primaryHover: "#00935F",
    secondary: "#2F81C4", // Blue for secondary elements
    bgGray: "#2D3748", //gray background
    bgTransparentGreen: "#0fa239a7",
  },
  fontSizes: {
    xs: initialSize * 0.75 + "rem",
    ls: initialSize * 0.8 + "rem",
    sm: initialSize * 0.875 + "rem",
    md: initialSize * 1 + "rem",
    lg: initialSize * 1.125 + "rem",
    xl: initialSize * 1.25 + "rem",
    xxl: initialSize * 1.5 + "rem",
    xxxl: initialSize * 1.875 + "rem",
    xxxxl: initialSize * 2.25 + "rem",
    "5xl": initialSize * 3 + "rem",
    "6xl": initialSize * 3.75 + "rem",
    "7xl": initialSize * 4.5 + "rem",
    "8xl": initialSize * 6 + "rem",
    "9xl": initialSize * 8 + "rem",
  },
};
const initialState = {
  colorMode: localStorage.getItem("chakra-ui-color-mode") || "light", // Initial color mode
  theme:
    localStorage.getItem("chakra-ui-color-mode") === "dark"
      ? darkTheme
      : lightTheme,
  size: initialSize,
};

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    colorModeReducer: (state) => {
      state.colorMode = state.colorMode === "light" ? "dark" : "light";
    },
    themeReducer: (state) => {
      state.theme = state.colorMode === "light" ? lightTheme : darkTheme;
    },
    sizeUpReducer: (state) => {
      const size = state.size < 1.5 ? 0.25 + Number(state.size) : state.size;
      state.size = size;
      localStorage.setItem("size", size);
      state.theme = {
        ...state.theme,
        fontSizes: calculateFontSizes(size),
      };
    },
    sizeDownReducer: (state) => {
      const size = state.size > 0.5 ? state.size - 0.25 : state.size;
      state.size = size;
      localStorage.setItem("size", size);
      state.theme = {
        ...state.theme,
        fontSizes: calculateFontSizes(size),
      };
    },
  },
});
export const {
  colorModeReducer,
  themeReducer,
  sizeUpReducer,
  sizeDownReducer,
} = colorModeSlice.actions;
export default colorModeSlice.reducer;
