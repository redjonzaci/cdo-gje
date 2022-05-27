import '@fontsource/roboto';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { useState } from 'react';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
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
      <Component
        {...pageProps}
        themeType={themeType}
        switchThemes={switchThemes}
      />
    </ThemeProvider>
  );
}

export default App;
