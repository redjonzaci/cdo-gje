import { css } from '@emotion/css';
import Search from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
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
      return { index };
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
    </main>
  );
}

export default Main;
