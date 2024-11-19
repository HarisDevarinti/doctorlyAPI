
import express from 'express';
import { registerPatient } from '../Controllers/patientController.js';

const router = express.Router();

// Route to register a new patient
router.post('/register', registerPatient);

export default router;
