import { NextFunction, Request, Response } from "express";
import { newPatientSchema } from "../services/types";
import { z } from "zod";
import { v1 as uuid } from "uuid";

export const newPatientParser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    newPatientSchema.parse({ id: uuid(), ...req.body });
    next();
  } catch (e) {
    next(e);
  }
};

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof z.ZodError) {
    res.status(400).json(error.issues);
  } else {
    next(error);
  }
};
