"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
router.post('/', (req, res) => {
    res.json({ message: 'Post workout' });
});
// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a single workouts' });
});
// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'update a single workouts' });
});
exports.default = router;
