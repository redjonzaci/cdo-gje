import { css } from '@emotion/css';

function Preferences({
  isSettingsVisible,
  setIsSettingsVisible,
  setItemsPerPage,
  rowsPerPage,
  itemWidth,
  setItemWidth,
}: {
  isSettingsVisible: boolean;
  setIsSettingsVisible: Function;
  setItemsPerPage: Function;
  rowsPerPage: number;
  itemWidth: number;
  setItemWidth: Function;
}) {
  function changeLayout(value: any) {
    let itemsInRow = parseInt(value);
    setItemsPerPage(itemsInRow * rowsPerPage);

    switch (itemsInRow) {
      case 2:
        setItemWidth(10);
        break;
      case 4:
        setItemWidth(5);
        break;
    }
  }

  return <aside></aside>;
}

export default Preferences;
