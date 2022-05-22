import { MouseEventHandler, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Preferences from './Preferences';

function Home({
  themeType,
  switchThemes,
}: {
  themeType: string;
  switchThemes: MouseEventHandler;
}) {
  const rowsPerPage = 8;

  const [itemWidth, setItemWidth] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(2 * rowsPerPage);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);

  return (
    <>
      <Header
        themeType={themeType}
        switchThemes={switchThemes}
        setIsPostFormVisible={setIsPostFormVisible}
        setIsSettingsVisible={setIsSettingsVisible}
      />
      <Main
        itemsPerPage={itemsPerPage}
        itemWidth={itemWidth}
        isPostFormVisible={isPostFormVisible}
        setIsPostFormVisible={setIsPostFormVisible}
      />
      <Preferences
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        setItemsPerPage={setItemsPerPage}
        rowsPerPage={rowsPerPage}
        itemWidth={itemWidth}
        setItemWidth={setItemWidth}
      />
    </>
  );
}

export default Home;
