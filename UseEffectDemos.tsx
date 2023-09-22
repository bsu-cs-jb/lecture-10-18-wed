import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UseEffectDeps from "./UseEffectDeps";
import { LctTabNavigator } from "./LctTabNavigator";
import UseEffectChangeState from "./UseEffectChangeState";
import UseEffectWhen from "./UseEffectWhen";

const Tab = createBottomTabNavigator();

export default function UseEffectDemos() {
  const TABS = [
    {
      key: "Deps",
      title: "Dependencies",
      label: "deps",
      component: UseEffectDeps,
      icon: "barcode",
    },
    {
      key: "Changes State",
      label: "State",
      component: UseEffectChangeState,
      icon: "flash",
    },
    {
      key: "When",
      label: "When?",
      component: UseEffectWhen,
      icon: "time",
    },
  ];

  const routeToIcon = Object.fromEntries(
    TABS.map((tab) => [tab.key, tab.icon]),
  );
  return (
    <LctTabNavigator Tab={Tab} routeToIcon={routeToIcon}>
      {/* TODO: Do something with timers */}
      {TABS.map((tab) => (
        <Tab.Screen
          key={tab.key}
          name={tab.key}
          component={tab.component}
          options={{
            title: tab.title ?? tab.key,
            tabBarLabel: tab.label ?? tab.key,
          }}
        />
      ))}
    </LctTabNavigator>
  );
}
