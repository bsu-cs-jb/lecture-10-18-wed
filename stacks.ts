import { ReactNode } from "react";
import ModalDemos from "./ModalDemos";

export interface StackDef {
  key: string;
  title: string;
  component: () => ReactNode;
}

export const STACKS: Record<string, StackDef> = {
  useContext: {
    key: "modal",
    title: "Modal Demos",
    component: ModalDemos,
  },
};
export type AppStackParamList = {
  [Property in keyof typeof STACKS]: undefined;
} & { Home: undefined };
