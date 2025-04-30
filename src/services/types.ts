import { z } from "zod";

export enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry {}

export const newPatientSchema = z.object({
  id: z.string(),
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string(),
});

export type Patient = z.infer<typeof newPatientSchema> & {
  entries: Entry[];
};

export type NonSensitivePatientInfo = Omit<Patient, "ssn" | "entries">;
