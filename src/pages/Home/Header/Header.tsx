import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import { MouseEventHandler } from 'react';

function Header({
  themeType,
  switchThemes,
  setIsSettingsVisible,
}: {
  themeType: string;
  switchThemes: MouseEventHandler;
  setIsSettingsVisible: Function;
}) {
  return (
    <header>
      <Button onClick={switchThemes} variant="outlined">
        {themeType === 'light' ? <DarkMode /> : <LightMode />}
      </Button>
    </header>
  );
}

export default Header;
