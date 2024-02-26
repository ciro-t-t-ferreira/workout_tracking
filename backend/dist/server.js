"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config(); //for using the global variable on .env 
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
//routes
app.get('/', (req, res) => {
    res.json({ mssg: 'Sup' });
});
//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port' + ' ' + process.env.PORT);
});
