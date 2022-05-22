import '@fontsource/roboto';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  const [themeType, setThemeType] = useState('light');
  const switchThemes = () => {
    setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  const theme = createTheme({
    palette: {
      mode: themeType as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home themeType={themeType} switchThemes={switchThemes} />
    </ThemeProvider>
  );
}

export default App;
