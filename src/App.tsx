import { Button } from '@geist-ui/core';
import CssBaseline from '@geist-ui/core/esm/css-baseline';
import GeistProvider from '@geist-ui/core/esm/geist-provider';
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
        <Button onClick={switchThemes}>
          {themeType === 'light' ? 'Nate' : 'Dite'}
        </Button>
        <Home />
      </GeistProvider>
    </>
  );
}

export default App;
