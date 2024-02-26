import express, { Router, Request, Response } from 'express';
import {getAllworkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout}
 from '../controllers/workoutController';

const router: Router = express.Router();

// GET all workouts
router.get('/', getAllworkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST a workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

export default router;