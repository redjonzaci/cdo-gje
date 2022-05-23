import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

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
        setItemWidth(5);
        break;
      case 4:
        setItemWidth(2.5);
        break;
    }
  }

  return (
    <Drawer
      anchor="right"
      onClose={() => setIsSettingsVisible(false)}
      open={isSettingsVisible}
    >
      <List>
        <ListItem>
          <FormControl>
            <FormLabel>Postime per rresht</FormLabel>
            <RadioGroup
              value={10 / itemWidth}
              onChange={(event) => changeLayout(event.target.value)}
            >
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
            </RadioGroup>
          </FormControl>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Preferences;
