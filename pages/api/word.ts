import type { NextApiRequest, NextApiResponse } from 'next'
import { StringLiteral } from 'typescript';
import prisma from '../../prisma/connection';

type Define = {
  id: string,
  text: string,
  definition: string,
  createdAt: Date,
  updatedAt: Date
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Define | null>
) {
    const { method } = req;    
    await prisma.$connect();
    if (method === "GET") {
        const { text } = req.query;
        let result: Define | null = null;
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
