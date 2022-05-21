import { css } from '@emotion/css';
import Badge from '@geist-ui/core/esm/badge';
import Button from '@geist-ui/core/esm/button';
import Card from '@geist-ui/core/esm/card';
import Description from '@geist-ui/core/esm/description';
import Drawer from '@geist-ui/core/esm/drawer';
import Grid from '@geist-ui/core/esm/grid';
import Input from '@geist-ui/core/esm/input';
import Pagination from '@geist-ui/core/esm/pagination';
import Radio from '@geist-ui/core/esm/radio';
import Spacer from '@geist-ui/core/esm/spacer';
import Text from '@geist-ui/core/esm/text';
import CornerDownLeft from '@geist-ui/icons/cornerDownLeft';
import Moon from '@geist-ui/icons/moon';
import Search from '@geist-ui/icons/search';
import Sun from '@geist-ui/icons/sun';
import { KeyboardEvent, MouseEvent, MouseEventHandler, useState } from 'react';

function Home({
  themeType,
  switchThemes,
}: {
  themeType: string;
  switchThemes: MouseEventHandler;
}) {
  const items = Array.apply(null, Array(64)).map((item, index) => {
    return { index };
  });
  const rowsPerPage = 8;

  const [itemWidth, setItemWidth] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2 * rowsPerPage);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

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

  function generateListOf(items: any[]) {
    return items.map((items, index) => {
      return (
        <Grid key={index} xs={itemWidth}>
          <Card width={100}>{index}</Card>
        </Grid>
      );
    });
  }

  function handleEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      alert('Duke kerkuar...');
    }
  }

  function handleClick(event: MouseEvent) {
    alert('Duke kerkuar...');
  }

  return (
    <>
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
      <Grid.Container direction="column" alignItems="center">
        <Text h1>
          Cdo Gje <Badge type="warning">Beta</Badge>
        </Text>
        <Input
          iconRight={<CornerDownLeft />}
          onKeyDown={handleEnter}
          placeholder="Shtepi, Pune, Makina, ..."
        />
        <Spacer />
        <Button icon={<Search />} onClick={handleClick}>
          Kerko
        </Button>
      </Grid.Container>
      <Spacer />
      <Grid.Container gap={2} justify="center">
        <Grid.Container xs={20} direction="column" alignItems="center">
          <Grid.Container gap={2} justify="center">
            {generateListOf(items).slice(
              (pageNumber - 1) * itemsPerPage,
              pageNumber * itemsPerPage
            )}
          </Grid.Container>
          <Spacer />
          <Pagination
            count={items.length / itemsPerPage}
            onChange={(newPageNumber) => setPageNumber(newPageNumber)}
            page={pageNumber}
            className={css({
              'li button:not([class*=active]):focus': {
                backgroundColor: 'rgba(0, 112, 243, 0.1)',
              },
            })}
          />
        </Grid.Container>
      </Grid.Container>
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
    </>
  );
}

export default Home;
