import { ReactNode } from "react";
import UseContextDemos from "./UseContextDemos";

export interface StackDef {
  key: string;
  title: string;
  component: () => ReactNode;
}

export const STACKS: Record<string, StackDef> = {
  useContext: {
    key: "useContext",
    title: "useContext Demos",
    component: UseContextDemos,
  },
};
export type AppStackParamList = {
  [Property in keyof typeof STACKS]: undefined;
} & { Home: undefined };
