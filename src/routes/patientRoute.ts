import express, { Request, Response } from "express";
import { addPatient, getPatients } from "../services/patientServices";
import { NonSensitivePatientInfo, Patient } from "../services/types";
import {
  errorMiddleware,
  newPatientParser,
} from "../middlewares/patientMiddleware";

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

router.post(
  "/",
  newPatientParser,
  (req: Request<unknown, unknown, Patient>, res: Response<Patient>) => {
    const addedPatient = addPatient(req.body);
    res.status(201).json(addedPatient);
  }
);

router.use(errorMiddleware);

export default router;
