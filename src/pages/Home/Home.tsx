import Button from '@geist-ui/core/esm/button';
import Input from '@geist-ui/core/esm/input';
import Text from '@geist-ui/core/esm/text';
import CornerDownLeft from '@geist-ui/icons/cornerDownLeft';
import Search from '@geist-ui/icons/search';
import { KeyboardEvent, MouseEvent } from 'react';

function Home() {
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
    </>
  );
}

export default Home;
