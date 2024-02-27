require('dotenv').config(); //for using the global variable on .env 

import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts';

const app = express()

//middleware
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => { //next () is necessary for going to the next middleware
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes); //1st argument makes the routes accessible through the

//connect to database
//console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        //listen for request, which we just want to do after connecting to the DB
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port' + ' ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
