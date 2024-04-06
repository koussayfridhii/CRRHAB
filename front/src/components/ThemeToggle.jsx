import { Button, useColorMode } from "@chakra-ui/react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useDispatch } from "react-redux";
import { colorModeReducer, themeReducer } from "../colorModeSlice";
import { languageReducer } from "../languageSlice";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        toggleColorMode();
        dispatch(colorModeReducer());
        dispatch(themeReducer());
        dispatch(languageReducer("ar"));
      }}
      color={"primary"}
    >
      {colorMode === "light" ? <ModeNightIcon /> : <WbTwilightIcon />}
    </Button>
  );
};
export default ThemeToggle;
