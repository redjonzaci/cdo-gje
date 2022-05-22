import { css } from '@emotion/css';
import Search from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Pagination from '@mui/material/Pagination';
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
        <Grid item key={index} xs={itemWidth}>
          <Card>{index}</Card>
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
      <Container maxWidth="xl">
        <Grid container direction="column" alignItems="center">
          <h1>Cdo Gje</h1>
          <div
            className={css({
              '&': {
                marginBottom: '1rem',
              },
            })}
          >
            <Input
              autoFocus
              placeholder="Kerko"
              inputProps={{ 'aria-label': 'Kerko' }}
              onKeyDown={handleEnter}
            />
            <IconButton
              sx={{ padding: '10px' }}
              aria-label="Kerko"
              onClick={handleClick}
            >
              <Search />
            </IconButton>
          </div>
          <Grid container justifyContent="center" spacing={2} marginBottom={2}>
            {generateListOf(items).slice(
              (pageNumber - 1) * itemsPerPage,
              pageNumber * itemsPerPage
            )}
          </Grid>
          <Pagination
            count={items.length / itemsPerPage}
            onChange={(event, newPageNumber) => {
              setPageNumber(newPageNumber);
            }}
          />
        </Grid>
      </Container>
    </main>
  );
}

export default Main;
