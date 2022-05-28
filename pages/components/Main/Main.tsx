import { css } from '@emotion/css';
import Search from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Pagination from '@mui/material/Pagination';
import { KeyboardEvent, MouseEvent, useState } from 'react';
import PostForm from './PostForm';

function Main({
  items,
  itemsPerPage,
  itemWidth,
  isPostFormVisible,
  setIsPostFormVisible,
}: {
  items: any[];
  itemsPerPage: number;
  itemWidth: number;
  isPostFormVisible: boolean;
  setIsPostFormVisible: Function;
}) {
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState(items);

  let numberOfPages = 1;
  if (posts) {
    numberOfPages = Math.ceil(posts.length / itemsPerPage);
  }

  function generateListOf(items: any[]) {
    return (
      posts &&
      posts.map((item, index) => {
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
          {items && (
            <Grid
              container
              justifyContent="center"
              spacing={2}
              marginBottom={2}
            >
              {generateListOf(items).slice(
                (pageNumber - 1) * itemsPerPage,
                pageNumber * itemsPerPage
              )}
            </Grid>
          )}
          <Pagination
            count={numberOfPages}
            onChange={(event, newPageNumber) => {
              setPageNumber(newPageNumber);
            }}
          />
        </Grid>
      </Container>
      <Dialog
        keepMounted
        onClose={() => setIsPostFormVisible(false)}
        open={isPostFormVisible}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item>
              <DialogTitle>Shto nje postim te ri</DialogTitle>
              <DialogContent>
                <PostForm setPosts={setPosts} />
              </DialogContent>
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </main>
  );
}

export default Main;
