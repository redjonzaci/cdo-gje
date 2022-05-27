import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.city.createMany({
    data: [
      {
        name: 'Tirana',
      },
      {
        name: 'Durrës',
      },
      {
        name: 'Vlorë',
      },
      {
        name: 'Elbasan',
      },
      {
        name: 'Shkodër',
      },
      {
        name: 'Kamëz',
      },
      {
        name: 'Fier',
      },
      {
        name: 'Korçë',
      },
      {
        name: 'Berat',
      },
      {
        name: 'Lushnjë',
      },
      {
        name: 'Pogradec',
      },
      {
        name: 'Kavajë',
      },
      {
        name: 'Gjirokastër',
      },
      {
        name: 'Fushë-Krujë',
      },
      {
        name: 'Sarandë',
      },
      {
        name: 'Laç',
      },
      {
        name: 'Kukës',
      },
    ],
  });

  await prisma.currency.createMany({
    data: [
      {
        name: 'Lekë',
      },
      {
        name: 'Euro',
      },
    ],
  });

  await prisma.houseCategory.createMany({
    data: [
      {
        name: 'Garsoniere',
      },
      {
        name: '1+1',
      },
      {
        name: '2+1',
      },
      {
        name: '3+1',
      },
    ],
  });

  await prisma.houseType.createMany({
    data: [
      {
        name: 'Në Shitje',
      },
      {
        name: 'Me Qera',
      },
    ],
  });

  for (let i = 0; i < 50; i++) {
    await prisma.house.create({
      data: {
        cityId: 1,
        houseTypeId: 2,
        houseCategoryId: 2,
        surface: 66,
        price: 350,
        currencyId: 2,
      },
    });
  }
}

main();
