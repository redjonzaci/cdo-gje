import Button from '@geist-ui/core/esm/button';
import CssBaseline from '@geist-ui/core/esm/css-baseline';
import GeistProvider from '@geist-ui/core/esm/geist-provider';
import Grid from '@geist-ui/core/esm/grid';
import Moon from '@geist-ui/icons/moon';
import Sun from '@geist-ui/icons/sun';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  const [themeType, setThemeType] = useState('light');
  const switchThemes = () => {
    setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Grid.Container justify="flex-end">
          <Button
            auto
            iconRight={themeType === 'light' ? <Moon /> : <Sun />}
            marginRight={1}
            marginTop={1}
            onClick={switchThemes}
          >
            {themeType === 'light' ? 'Nate' : 'Dite'}
          </Button>
        </Grid.Container>
        <Home />
      </GeistProvider>
    </>
  );
}

export default App;
