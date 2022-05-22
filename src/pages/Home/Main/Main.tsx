import { css } from '@emotion/css';
import Badge from '@geist-ui/core/esm/badge';
import Button from '@geist-ui/core/esm/button';
import Card from '@geist-ui/core/esm/card';
import Grid from '@geist-ui/core/esm/grid';
import Input from '@geist-ui/core/esm/input';
import Pagination from '@geist-ui/core/esm/pagination';
import Spacer from '@geist-ui/core/esm/spacer';
import Text from '@geist-ui/core/esm/text';
import CornerDownLeft from '@geist-ui/icons/cornerDownLeft';
import Search from '@geist-ui/icons/search';
import { KeyboardEvent, MouseEvent, useState } from 'react';

function Main({
  itemsPerPage,
  itemWidth,
}: {
  itemsPerPage: number;
  itemWidth: number;
}) {
  const items = Array.apply(null, Array(64)).map((item, index) => {
    return { index };
  });

  const [pageNumber, setPageNumber] = useState(1);

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
    <main>
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
    </main>
  );
}

export default Main;
