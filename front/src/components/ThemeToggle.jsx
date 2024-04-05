import { Button, useColorMode } from "@chakra-ui/react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ModeNightIcon from "@mui/icons-material/ModeNight";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <ModeNightIcon /> : <WbTwilightIcon />}
    </Button>
  );
}
export default ThemeToggle;
