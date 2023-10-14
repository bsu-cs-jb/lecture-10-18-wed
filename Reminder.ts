import { createContext } from "react";

export interface Reminder {
  id: string;
  name: string;
  time: number;
}

export type ReminderListContext = [
  reminderList: Reminder[],
  cancelReminder: (id: string) => void,
];

export const ReminderListContext = createContext<ReminderListContext>(
  [[], (id: string) => id],
);
