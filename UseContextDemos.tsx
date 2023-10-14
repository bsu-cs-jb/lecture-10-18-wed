import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IoniconIcons, LctTabNavigator } from "./LctTabNavigator";
import CreateTimerModal from "./CreateTimerModal";
import PropDrilling from "./PropDrilling";
import UseContext5 from "./UseContext5";
import UseContextTheme from "./UseContextTheme";

const Tab = createBottomTabNavigator();

interface Tab {
  key: string;
  title?: string;
  label?: string;
  component: () => React.ReactNode;
  icon?: IoniconIcons;
}

export default function UseContextDemos() {
  const TABS: Tab[] = [
    {
      key: "Theme",
      component: UseContextTheme,
    },
    {
      key: "Fourth",
      component: PropDrilling,
    },
    {
      key: "Five",
      component: UseContext5,
    },
    {
      key: "Timer Modal",
      component: CreateTimerModal,
    },
  ];

  const routeToIcon = Object.fromEntries<IoniconIcons | undefined>(
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
            tabBarLabel: tab.label ?? tab.title ?? tab.key,
          }}
        />
      ))}
    </LctTabNavigator>
  );
}
