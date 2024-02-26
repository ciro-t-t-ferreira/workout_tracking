import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

// GET all workouts
router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'get all workouts' });
});

// GET single workout
router.get('/:id', (req: Request, res: Response) => {
    res.json({ message: 'get single workouts' });
});

// POST a workout
router.post('/', (req: Request, res: Response) => {
    res.json({ message: 'Post workout' });
});

// DELETE a workout
router.delete('/:id', (req: Request, res: Response) => {
    res.json({ message: 'delete a single workouts' });
});

// UPDATE a workout
router.patch('/:id', (req: Request, res: Response) => {
    res.json({ message: 'update a single workouts' });
});

export default router;