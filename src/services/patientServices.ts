import { Patient } from "./types";
import patientData from "../data/patients";

export const getPatients = (): Patient[] => patientData;

export const addPatient = (newPatient: Patient): Patient => {
  patientData.push(newPatient);
  return newPatient;
};
