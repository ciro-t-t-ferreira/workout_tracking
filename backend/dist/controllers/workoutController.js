"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorkout = exports.deleteWorkout = exports.createWorkout = exports.getWorkout = exports.getAllworkouts = void 0;
const workoutModel_1 = __importDefault(require("../models/workoutModel"));
const mongoose_1 = __importDefault(require("mongoose"));
// get all workouts
const getAllworkouts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workouts = yield workoutModel_1.default.find({}).sort({ 'title': -1 }); //need to be replaced for createdAt when I fix the timestamp thing at model
    res.status(200).json(workouts);
});
exports.getAllworkouts = getAllworkouts;
// get single workout
const getWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'There is no workout with this id' });
    }
    const workout = yield workoutModel_1.default.findById(id);
    if (!workout) {
        return res.status(404).json({ error: 'There is no workout with this id' });
    }
    res.status(200).json(workout);
});
exports.getWorkout = getWorkout;
// create new workout
const createWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, reps, load } = req.body;
    console.log('sup');
    //add the workout doc to db
    try {
        const workout = yield workoutModel_1.default.create({ title, reps, load });
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createWorkout = createWorkout;
//delete a workout
const deleteWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'There is no workout with this id' });
    }
    const workout = yield workoutModel_1.default.findOneAndDelete({ _id: id });
    if (!workout) {
        return res.status(404).json({ error: 'There is no workout with this id' });
    }
    res.status(200).json(workout);
});
exports.deleteWorkout = deleteWorkout;
//update a workout
const updateWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'There is no workout with this id' });
    }
    console.log(req.body);
    const workout = yield workoutModel_1.default.findOneAndUpdate({ _id: id }, Object.assign({}, req.body //the ... works for altering all non null properties
    ));
    if (!workout) {
        return res.status(404).json({ error: 'There is no workout with this id' });
    }
    res.status(200).json(workout);
});
exports.updateWorkout = updateWorkout;
