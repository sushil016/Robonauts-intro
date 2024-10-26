import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import winston from 'winston';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

app.use(cors());
app.use(express.json());

// Input validation middleware
const validateMemberInput = (req: Request, res: Response, next: NextFunction) => {
  const { department, domain, subgroup, name, email, phone, yearOfStudy } = req.body;

  if (!department || !domain || !subgroup || !name || !email || !phone || !yearOfStudy) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Phone validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  next();
};


app.post('/api/members', validateMemberInput, async (req: Request, res: Response): Promise<void> => {
  try {
    const member = await prisma.member.create({
      data: req.body
    });

    logger.info('New member created', { memberId: member.id });
    res.status(201).json(member);
  } catch (error) {
    logger.error('Error creating member');

    if ((error as { code?: string }).code === 'P2002') {
      res.status(400).json({ 
        error: 'A member with this email already exists' 
      });
      return;
    }

    res.status(500).json({ 
      error: 'An error occurred while creating the member' 
    });
  }
});

// Create application
app.post('/api/applications', async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      department,
      experience,
      previousProject,
      interests,
      why
    } = req.body;

    const application = await prisma.application.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        department,
        experience,
        previousProject,
        interests,
        why
      }
    });

    res.json(application);
  } catch (error) {
    console.error('Application submission error:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Get all applications (admin endpoint)
app.get('/api/applications', async (req: Request, res: Response) => {
  try {
    const applications = await prisma.application.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// Get application by ID
// app.get('/api/applications/:id', async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const applicationId = parseInt(id, 10);

//     if (isNaN(applicationId)) {
//       return res.status(400).json({ error: 'Invalid application ID' });
//     }

//     const application = await prisma.application.findUnique({
//       where: { id: applicationId }
//     });

//     if (!application) {
//       return res.status(404).json({ error: 'Application not found' });
//     }

//     res.json(application);
//   } catch (error) {
//     console.error('Error fetching application:', error);
//     res.status(500).json({ error: 'Failed to fetch application' });
//   }
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Unhandled error', { error: err.message });
  res.status(500).json({ 
    error: 'An unexpected error occurred' 
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});