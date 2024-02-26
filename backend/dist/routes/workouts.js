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
const express_1 = __importDefault(require("express"));
const workoutModel_1 = __importDefault(require("../models/workoutModel"));
const router = express_1.default.Router();
// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: 'get all workouts' });
});
// GET single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'get single workouts' });
});
// POST a workout
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, reps, load } = req.body;
    try {
        const workout = yield workoutModel_1.default.create({ title, reps, load });
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a single workouts' });
});
// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'update a single workouts' });
});
exports.default = router;
