import { Entry, Patient } from "./types";
import patientData from "../data/patients";

export const getPatients = (): Patient[] => patientData;

export const getPatientById = (id: string): Patient | undefined =>
  patientData.find((patient) => patient.id === id);

export const addEntries = (id: string, newEntry: Entry) => {
  const index = patientData.findIndex((patient) => patient.id === id);
  patientData.fill(
    {
      ...patientData[index],
      entries: patientData[index].entries.concat(newEntry),
    },
    index
  );
  return patientData[index];
};

export const addPatient = (newPatient: Patient): Patient => {
  patientData.push(newPatient);
  return newPatient;
};
