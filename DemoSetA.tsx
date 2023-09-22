import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SetADemo1 from "./SetADemo1";
import { LctTabNavigator } from "./LctTabNavigator";

const Tab = createBottomTabNavigator();

export default function DemoSetA() {
  const routeToIcon = {
    "Demo 1": "cloud-done",
    "Demo 2": "home",
  };
  return (
    <LctTabNavigator Tab={Tab} routeToIcon={routeToIcon}>
      {/* TODO: Do something with timers */}
      <Tab.Screen name="Demo 1" component={SetADemo1} />
      <Tab.Screen name="Demo 2" component={SetADemo1} />
    </LctTabNavigator>
  );
}
