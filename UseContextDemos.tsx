import * as React from "react";
import { LctTabNavigator, TabSettings } from "./LctTabNavigator";
import CreateTimerModal from "./CreateTimerModal";
import PropDrilling from "./PropDrilling";
import FixPropDrilling from "./FixPropDrilling";
import UseContextTheme from "./UseContextTheme";

const TABS: TabSettings[] = [
  {
    key: "Theme",
    component: UseContextTheme,
  },
  {
    key: "Prop Drilling",
    component: PropDrilling,
  },
  {
    key: "No Drilling",
    component: FixPropDrilling,
  },
  {
    key: "Timer Modal",
    component: CreateTimerModal,
  },
];

export default function UseContextDemos() {
  return <LctTabNavigator tabs={TABS} />;
}
