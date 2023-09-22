import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SetBDemo1 from "./SetBDemo1";
import { LctTabNavigator } from "./LctTabNavigator";

const Tab = createBottomTabNavigator();

export default function DemoSetB() {
  const routeToIcon = {
    "Demo 1": "construct",
  };
  return (
    <LctTabNavigator Tab={Tab} routeToIcon={routeToIcon}>
      {/* TODO: Do something with timers */}
      <Tab.Screen name="Demo 1" component={SetBDemo1} />
      <Tab.Screen name="Demo 2" component={SetBDemo1} />
    </LctTabNavigator>
  );
}
