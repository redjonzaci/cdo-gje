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
      <Home themeType={themeType} switchThemes={switchThemes} />
    </>
  );
}

export default App;
