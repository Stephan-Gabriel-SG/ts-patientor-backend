import { Patient } from "./types";
import patientData from "../data/patients";

export const getPatients = (): Patient[] => patientData;
