import express, { Router, Request, Response } from 'express';
import Workout from '../models/workoutModel';

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
router.post('/', async (req: Request, res: Response) => {
    const {title, reps, load} = req.body;
    
    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
        
    } catch(error: any){
        res.status(400).json({error: error.message})        
    }
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