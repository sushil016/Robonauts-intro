// src/routes/admin.ts
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get members with filters
router.get('/members', async (req: Request, res: Response) => {
  try {
    const {
      department,
      domain,
      subgroup,
      yearOfStudy,
      search,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    // Build filter conditions
    const where: any = {};

    if (department) where.department = department;
    if (domain) where.domain = domain;
    if (subgroup) where.subgroup = subgroup;
    if (yearOfStudy) where.yearOfStudy = yearOfStudy;
    
    // Search across name and email
    if (search) {
      where.OR = [
        { name: { contains: search as string, mode: 'insensitive' } },
        { email: { contains: search as string, mode: 'insensitive' } }
      ];
    }

    // Get total count for pagination
    const total = await prisma.member.count({ where });

    // Get filtered members
    const members = await prisma.member.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: {
        [sortBy as string]: sortOrder
      }
    });

    res.json({
      members,
      pagination: {
        total,
        pages: Math.ceil(total / Number(limit)),
        currentPage: Number(page),
        limit: Number(limit)
      }
    });
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

router.get('/members/:id', async (req: Request, res: Response) => {
  try {
    const member = await prisma.member.findUnique({
      where: { id: Number(req.params.id) }
    });

    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json(member);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch member details' });
  }
});

// Get summary statistics
router.get('/statistics', async (req: Request, res: Response) => {
  try {
    const totalMembers = await prisma.member.count();
    
    const departmentStats = await prisma.member.groupBy({
      by: ['department'],
      _count: true
    });

    const domainStats = await prisma.member.groupBy({
      by: ['domain'],
      _count: true
    });

    const yearStats = await prisma.member.groupBy({
      by: ['yearOfStudy'],
      _count: true
    });

    res.json({
      totalMembers,
      departmentStats,
      domainStats,
      yearStats
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

export default router;