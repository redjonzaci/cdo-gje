import Head from 'next/head';
import { MouseEventHandler, useState } from 'react';
import prisma from '../lib/prisma';
import Header from './components/Header';
import Main from './components/Main';
import Preferences from './components/Preferences';

function Home({
  items,
  themeType,
  switchThemes,
}: {
  items: any[];
  themeType: string;
  switchThemes: MouseEventHandler;
}) {
  const rowsPerPage = 8;

  const [itemWidth, setItemWidth] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(2 * rowsPerPage);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Cdo Gje</title>
      </Head>
      <Header
        themeType={themeType}
        switchThemes={switchThemes}
        setIsPostFormVisible={setIsPostFormVisible}
        setIsSettingsVisible={setIsSettingsVisible}
      />
      <Main
        items={items}
        itemsPerPage={itemsPerPage}
        itemWidth={itemWidth}
        isPostFormVisible={isPostFormVisible}
        setIsPostFormVisible={setIsPostFormVisible}
      />
      <Preferences
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        setItemsPerPage={setItemsPerPage}
        rowsPerPage={rowsPerPage}
        itemWidth={itemWidth}
        setItemWidth={setItemWidth}
      />
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const items = await prisma.post.findMany({
    include: {
      house: true
    }
  });

  return {
    props: { items },
  };
}
