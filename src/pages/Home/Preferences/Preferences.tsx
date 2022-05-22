import { css } from '@emotion/css';
import Description from '@geist-ui/core/esm/description';
import Drawer from '@geist-ui/core/esm/drawer';
import Grid from '@geist-ui/core/esm/grid';
import Radio from '@geist-ui/core/esm/radio';

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

  return (
    <aside>
      <Drawer
        visible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
      >
        <Drawer.Title>Preferencat</Drawer.Title>
        <Drawer.Content>
          <Grid.Container direction="column">
            <Description title="Postime per rresht" />
            <Radio.Group
              value={`${20 / itemWidth}`}
              onChange={changeLayout}
              scale={1.5}
            >
              <Grid.Container justify="space-evenly" alignItems="flex-start">
                <Radio value="2">2</Radio>
                <Radio
                  className={css({
                    '.radio-group div.radio&': {
                      marginTop: '0',
                    },
                  })}
                  value="4"
                >
                  4
                </Radio>
              </Grid.Container>
            </Radio.Group>
          </Grid.Container>
        </Drawer.Content>
      </Drawer>
    </aside>
  );
}

export default Preferences;
