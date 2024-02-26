"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workoutController_1 = require("../controllers/workoutController");
const router = express_1.default.Router();
// GET all workouts
router.get('/', workoutController_1.getAllworkouts);
// GET single workout
router.get('/:id', workoutController_1.getWorkout);
// POST a workout
router.post('/', workoutController_1.createWorkout);
// DELETE a workout
router.delete('/:id', workoutController_1.deleteWorkout);
// UPDATE a workout
router.patch('/:id', workoutController_1.updateWorkout);
exports.default = router;
