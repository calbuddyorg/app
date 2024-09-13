
import { defaultStrings } from "@/utils/stringUtils";
import * as yup from "yup";

export const SchemaNewEvent = yup
  .object({
    title: yup.string().required(defaultStrings.requiredField),
    description: yup.string(),
    startDate: yup.date(),
    startTime: yup.date(),
    endDate:yup.date(),
    endTime:yup.date(),
  })
  .required();

export type TSchemaNewEvent = yup.InferType<typeof SchemaNewEvent>;