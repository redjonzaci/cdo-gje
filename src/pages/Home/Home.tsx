import { css } from '@emotion/css';
import Badge from '@geist-ui/core/esm/badge';
import Button from '@geist-ui/core/esm/button';
import ButtonGroup from '@geist-ui/core/esm/button-group';
import Card from '@geist-ui/core/esm/card';
import Grid from '@geist-ui/core/esm/grid';
import Input from '@geist-ui/core/esm/input';
import Pagination from '@geist-ui/core/esm/pagination';
import Spacer from '@geist-ui/core/esm/spacer';
import Text from '@geist-ui/core/esm/text';
import CornerDownLeft from '@geist-ui/icons/cornerDownLeft';
import Moon from '@geist-ui/icons/moon';
import Search from '@geist-ui/icons/search';
import Sun from '@geist-ui/icons/sun';

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

  function changeLayout(event: MouseEvent) {
    const button = event.target as HTMLElement;
    let itemsInRow = parseInt(button.innerText);
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
        <Button
          aria-hidden
          auto
          icon={themeType === 'light' ? <Moon /> : <Sun />}
          marginRight={1}
          onClick={switchThemes}
        />
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
          <ButtonGroup>
            <Button onClick={changeLayout}>2</Button>
            <Button onClick={changeLayout}>4</Button>
          </ButtonGroup>
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
    </>
  );
}

export default Home;
