import express, { Response } from "express";
import { getPatients } from "../services/patientServices";
import { NonSensitivePatientInfo } from "../services/types";
const route = express.Router();

route.get("/", (_req, res: Response<NonSensitivePatientInfo[]>) => {
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

export default route;
