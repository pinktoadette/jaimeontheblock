import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/connection';

type Define = {
  text: string,
  defintion: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Define>
) {
    const { method } = req;    
    await prisma.$connect();
    if (method === "GET") {
        const { text } = req.query;
        let result;
        if (text) {
          result = await prisma.dictionary.findFirst({where: {
              text: (text as string).toLowerCase()
            },});
        }
        res.send(result);
    } else if (method === "POST") {
        const { text, definition } = req.body;
        const result = await prisma.dictionary.create({
            data: {
                text,
                definition
            },
          })
        res.send(result);
    }
    await prisma.$disconnect()
}
