// @ts-nocheck
import { Skill } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/connection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const { method } = req;    
    await prisma.$connect();
    if (method === "GET") {
        const { skill } = req.query;
        let result: any = null;
        if (skill) {
          result = await prisma.experience.findMany({
            where: { skills: { some: { tag: { in: skill } } } } ,
            include: {
              skills: true,
            },
          });
        } else {
          result = await prisma.experience.findMany({include: {
            skills: true,
          }})
        }
        res.send(result);
    } else if (method === "POST") {
        const { skills, des, location, title, accomplishment } = req.body;
        const resSkills = await prisma.skill.findMany({
          where: {
              tag: { in: skills },
          }
        })

        const result = await prisma.experience.create({
          data: {
            skills: {
              connect: resSkills.map((tag: Skill) => ({tag: tag.tag })),
            },
            des,
            title,
            location,
            accomplishment
          }
        })
        res.send(result);
    }
    await prisma.$disconnect()
}
