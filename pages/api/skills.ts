import type { NextApiRequest, NextApiResponse } from 'next'
import { StringLiteral } from 'typescript';
import prisma from '../../prisma/connection';

type Skill = {
  id: string,
  tag: string,
  createdAt: Date,
  updatedAt: Date
}

export type Experience = {
  id: string,
  skill: Skill[],
  des: string,
  title?: string,
  location: string,
  createdAt: Date,
  updatedAt: Date
}

export type ExperienceSkill = Skill & Experience;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Skill | Skill[] | null>
) {
    const { method } = req;    
    await prisma.$connect();
    if (method === "GET") {
        const { text } = req.query;
        let result;
        if (text) {
          result = await prisma.skill.findFirst({where: {
              tag: (text as string).toLowerCase()
            },});
        } else {
          result = await prisma.skill.findMany();
        }
        res.send(result);
    } else if (method === "POST") {
        const { tag, category } = req.body;
        const result = await prisma.skill.create({
            data: {
                tag,
                category
            },
          })
        res.send(result);
    }
    await prisma.$disconnect()
}
