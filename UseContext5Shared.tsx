import { createContext } from "react";
import { genid } from "./utils";

export interface Reminder {
  id: string;
  name: string;
  time: number;
}
export const ReminderListContext = createContext<Reminder[]>([]);
