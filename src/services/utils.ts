import { Gender, Patient } from "./types";
import { v1 as uuid } from "uuid";

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const isDate = (date: string): date is string => {
  return Boolean(Date.parse(date));
};

export const isGender = (gender: string): gender is Gender =>
  Object.values(Gender).join("").includes(gender);

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error("Invalid name");
  }
  return name;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error("Invalid occupation");
  }
  return occupation;
};

const parseSSN = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error("Invalid social security number");
  }
  return ssn;
};

const parseDateOfBirth = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Invalid Date of birth");
  }
  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Invalid gender");
  }
  return gender;
};

export const toNewPatient = (object: unknown): Patient => {
  if (!object || typeof object !== "object") {
    throw new Error("Missing or incorrect data");
  }
  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatient: Patient = {
      id: uuid(),
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };
    return newPatient;
  }
  throw new Error("Something went wrong!. missing value");
};
