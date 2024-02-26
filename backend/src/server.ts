require('dotenv').config(); //for using the global variable on .env 
import express, { Request, Response, NextFunction } from 'express';

const app = express()

//middleware
app.use((req: Request, res: Response, next: NextFunction) => { //next () is necessary for going to the next middleware
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/',(req: Request, res: Response) => {
    res.json({mssg: 'Sup'})
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port' + ' ' + process.env.PORT)
})