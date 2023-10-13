import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LctTabNavigator } from "./LctTabNavigator";
import UseContext1 from "./UseContext1";
import UseContext2 from "./UseContext2";
import UseContext3 from "./UseContext3";
import UseContext4 from "./UseContext4";
import UseContext5 from "./UseContext5";

const Tab = createBottomTabNavigator();

export default function UseContextDemos() {
  const TABS = [
    {
      key: "First",
      title: "First",
      label: "First",
      component: UseContext1,
      icon: "barcode",
    },
    {
      key: "Second",
      title: "Second",
      label: "Second",
      component: UseContext2,
      icon: "barcode",
    },
    {
      key: "Third",
      title: "Third",
      label: "Third",
      component: UseContext3,
      icon: "barcode",
    },
    {
      key: "Fourth",
      title: "Fourth",
      label: "Fourth",
      component: UseContext4,
      icon: "barcode",
    },
    {
      key: "Five",
      title: "Five",
      label: "Five",
      component: UseContext5,
      icon: "barcode",
    },
  ];

  const routeToIcon = Object.fromEntries(
    TABS.map((tab) => [tab.key, tab.icon]),
  );
  return (
    <LctTabNavigator Tab={Tab} routeToIcon={routeToIcon}>
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
