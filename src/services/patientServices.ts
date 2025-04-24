import { Patient } from "./types";
import patientData from "../data/patients";
import { toNewPatient } from "./utils";
export const getPatients = (): Patient[] => patientData;

export const addPatient = (newPatient: unknown): Patient => {
  const addedPatient = toNewPatient(newPatient);
  patientData.push(addedPatient);
  return addedPatient;
};
