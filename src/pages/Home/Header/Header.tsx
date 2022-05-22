import Button from '@geist-ui/core/esm/button';
import Grid from '@geist-ui/core/esm/grid';
import Moon from '@geist-ui/icons/moon';
import Sun from '@geist-ui/icons/sun';
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
      <Grid.Container justify="flex-end" marginTop={1}>
        <Button auto marginRight={1} onClick={() => setIsSettingsVisible(true)}>
          Preferencat
        </Button>
        <Button
          aria-hidden
          auto
          icon={themeType === 'light' ? <Moon /> : <Sun />}
          marginRight={1}
          onClick={switchThemes}
        />
      </Grid.Container>
    </header>
  );
}

export default Header;
