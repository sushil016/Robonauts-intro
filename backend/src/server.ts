import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});