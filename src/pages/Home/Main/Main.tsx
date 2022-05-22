import { css } from '@emotion/css';
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
    </main>
  );
}

export default Main;
