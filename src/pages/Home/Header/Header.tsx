import { css } from '@emotion/css';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
      <Grid container justifyContent="flex-end" marginTop={2} gap={2}>
        <Grid item>
          <Button
            className={css({
              '&': {
                marginRight: '2rem',
              },
            })}
            onClick={() => setIsSettingsVisible(true)}
            variant="outlined"
          >
            Preferencat
          </Button>
        </Grid>
        <Grid item marginRight={2}>
          <Button onClick={switchThemes} variant="outlined">
            {themeType === 'light' ? <DarkMode /> : <LightMode />}
          </Button>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
