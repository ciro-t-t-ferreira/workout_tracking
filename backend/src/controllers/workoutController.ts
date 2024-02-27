import Workout from '../models/workoutModel';
import express, { Router, Request, Response } from 'express';
import mongoose from 'mongoose';

// get all workouts
export const getAllworkouts = async (req: Request, res: Response) => {
    const workouts = await Workout.find({}).sort({'title': -1}); //need to be replaced for createdAt when I fix the timestamp thing at model

    res.status(200).json(workouts);
}

// get single workout
export const getWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'There is no workout with this id'})

    }

    const workout = await Workout.findById(id);

    if (!workout){
        return res.status(404).json({error: 'There is no workout with this id'})
    }

    res.status(200).json(workout);
}

// create new workout
export const createWorkout = async (req: Request, res: Response) => {
    const {title, reps, load} = req.body;
    
    console.log('sup')
    //add the workout doc to db
    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);        
    } catch(error: any){
        res.status(400).json({error: error.message})        
    }

} 

//delete a workout
export const deleteWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'There is no workout with this id'})
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout){
        return res.status(404).json({error: 'There is no workout with this id'})
    }

    res.status(200).json(workout);
}

//update a workout
export const updateWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'There is no workout with this id'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body //the ... works for altering all non null properties
    });

    if (!workout){
        return res.status(404).json({error: 'There is no workout with this id'})
    }

    res.status(200).json(workout);
}


