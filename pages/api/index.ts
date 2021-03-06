import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    title,
    description,
    cityId,
    houseTypeId,
    houseCategoryId,
    surface,
    price,
    currencyId,
  } = req.body;
  if (req.method == 'POST') {
    const house = await prisma.house.create({
      data: {
        cityId,
        houseTypeId,
        houseCategoryId,
        surface,
        price,
        currencyId,
      },
    });
    const post = await prisma.post.create({
      data: {
        title,
        description,
        houseId: house.id,
      },
    });

    res.json(
      await prisma.post.findFirst({
        where: {
          id: post.id,
        },
        include: {
          house: true,
        },
      })
    );
  }
  if (req.method == 'GET') {
    res.json(
      await prisma.post.findMany({
        include: {
          house: true,
        },
      })
    );
  }
}
