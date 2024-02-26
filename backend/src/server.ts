require('dotenv').config(); //for using the global variable on .env 

import express, { Request, Response, NextFunction } from 'express';
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

//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port' + ' ' + process.env.PORT)
})