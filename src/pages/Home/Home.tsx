import Button from '@geist-ui/core/esm/button';
import Card from '@geist-ui/core/esm/card';
import Grid from '@geist-ui/core/esm/grid';
import Input from '@geist-ui/core/esm/input';
import Spacer from '@geist-ui/core/esm/spacer';
import Text from '@geist-ui/core/esm/text';
import CornerDownLeft from '@geist-ui/icons/cornerDownLeft';
import Search from '@geist-ui/icons/search';
import { KeyboardEvent, MouseEvent, useState } from 'react';

function Home() {
  const items = Array.apply(null, Array(64)).map((item, index) => {
    return { index };
  });
  function generateListOf(items: any[]) {
    return items.map((items, index) => {
      return (
        <Grid key={index} xs={20}>
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
      <Text h1>Cdo Gje</Text>
      <Input
        iconRight={<CornerDownLeft />}
        onKeyDown={handleEnter}
        placeholder="Shtepi, Pune, Makina, ..."
      />
      <Button icon={<Search />} onClick={handleClick}>
        Kerko
      </Button>
      <Spacer />
      <Grid.Container gap={2}>
        <Grid xs={8} width={100}></Grid>
        <Grid.Container xs={16} direction="column" alignItems="center">
          <Grid.Container gap={2} justify="center">
            {generateListOf(items)}
          </Grid.Container>
        </Grid.Container>
      </Grid.Container>
    </>
  );
}

export default Home;
