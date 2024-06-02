import { Button, useColorMode } from "@chakra-ui/react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useDispatch } from "react-redux";
import { colorModeReducer, themeReducer } from "../redux/colorModeSlice";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        toggleColorMode();
        dispatch(colorModeReducer());
        dispatch(themeReducer());
      }}
      p={0}
      color={"text"}
    >
      {colorMode === "light" ? <ModeNightIcon /> : <WbTwilightIcon />}
    </Button>
  );
};
export default ThemeToggle;
