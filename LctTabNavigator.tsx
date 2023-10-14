import React from "react";
import { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import { IONICON_LIST, IoniconIcons } from "./IoniconHelpers";

const TabNavigator = createBottomTabNavigator();

export interface TabSettings {
  key: string;
  title?: string;
  label?: string;
  component: () => React.ReactNode;
  icon?: IoniconIcons;
}

interface IconHandlerProps {
  color: string;
  size: number;
  route: any;
}

export function LctTabNavigator({ tabs }: { tabs: TabSettings[] }) {
  const routeToIcon = Object.fromEntries<IoniconIcons | undefined>(
    tabs.map((tab) => [tab.key, tab.icon]),
  );
  const iconFallbackMap = useRef<NonNullable<typeof routeToIcon>>({});
  const iconList = useRef<IoniconIcons[]>(IONICON_LIST);

  const getIcon = (routeName: string) => {
    if (routeToIcon && routeToIcon[routeName]) {
      return routeToIcon[routeName];
    } else if (routeName in iconFallbackMap.current) {
      return iconFallbackMap.current[routeName];
    } else {
      const icon = iconList.current.pop() || "code";
      iconFallbackMap.current[routeName] = icon;
      return icon;
    }
  };

  const handleTabBarIcon = ({
    color,
    size,
    route,
  }: IconHandlerProps) => {
    const icon = getIcon(route.name as string);
    return <Ionicons name={icon} size={size} color={color} />;
  };
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: styles.titleText,
        tabBarIcon: (params) =>
          handleTabBarIcon({ ...params, route }),
      })}
    >
      {tabs.map((tab) => (
        <TabNavigator.Screen
          key={tab.key}
          name={tab.key}
          component={tab.component}
          options={{
            title: tab.title ?? tab.key,
            tabBarLabel: tab.label ?? tab.title ?? tab.key,
          }}
        />
      ))}
    </TabNavigator.Navigator>
  );
}
