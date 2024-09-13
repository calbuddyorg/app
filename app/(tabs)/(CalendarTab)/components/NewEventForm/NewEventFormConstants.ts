import { TSchemaNewEvent } from '@/schemas/NewEventSchema';

const todayDefaultValue = new Date();
export const initialValues: TSchemaNewEvent ={
    title: "",
    description: "",
    startDate: todayDefaultValue,
    startTime: todayDefaultValue,
    endDate: todayDefaultValue,
    endTime: todayDefaultValue,
  }