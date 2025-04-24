import express, { Response } from "express";
import { addPatient, getPatients } from "../services/patientServices";
import { NonSensitivePatientInfo } from "../services/types";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientInfo[]>) => {
  const patients = getPatients();
  res.status(200).json(
    patients.map((patient) => ({
      id: patient.id,
      name: patient.name,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      occupation: patient.occupation,
    }))
  );
});

router.post("/", (req, res) => {
  try {
    const addedPatient = addPatient(req.body);
    res.status(201).json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
