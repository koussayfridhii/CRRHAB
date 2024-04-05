import { extendTheme } from "@chakra-ui/react";

const lightTheme = extendTheme({
  colors: {
    light: {
      background: "#f8f8f8", // Light background color
      text: "#222222", // Dark text color
      primary: "#307EF3", // Blue for primary elements
      secondary: "#03DAC5", // Green for secondary elements
    },
    dark: {
      background: "#202023", // Dark background color
      text: "#f8f8f8", // Light text color
      primary: "#4F91CD", // Adjusted blue for dark theme
      secondary: "#57CAAE", // Adjusted green for dark theme
    },
  },
});

export default lightTheme;
