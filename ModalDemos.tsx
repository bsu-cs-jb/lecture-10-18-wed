import * as React from "react";
import { LctTabNavigator, TabSettings } from "./LctTabNavigator";
import CreateTimerModal from "./CreateTimerModal";

const TABS: TabSettings[] = [
  {
    key: "Timer Modal",
    component: CreateTimerModal,
  },
];

export default function ModalDemos() {
  return <LctTabNavigator tabs={TABS} />;
}
