"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config(); //for using the global variable on .env 
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const workouts_1 = __importDefault(require("./routes/workouts"));
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
//routes
app.use('/api/workouts', workouts_1.default); //1st argument makes the routes accessible through the
//connect to database
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    //listen for request, which we just want to do after connecting to the DB
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port' + ' ' + process.env.PORT);
    });
})
    .catch((error) => {
    console.log(error);
});
