import React from "react";
import { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

interface IconHandlerProps {
  color: string;
  size: number;
  route: any;
}

export function LctTabNavigator({
  Tab,
  routeToIcon,
  children,
}: {
  Tab: ReturnType<typeof createBottomTabNavigator>;
  routeToIcon?: Record<string, string>;
  children: any;
}) {
  const routeIconMap = useRef(routeToIcon);
  const iconList = useRef([
    "albums",
    "alert",
    "barcode",
    "at",
    "beaker",
    "bicycle",
    "cloud-circle",
    "cafe",
    "flask",
    "flower",
  ]);
  useEffect(() => {
    if (routeToIcon) {
      routeIconMap.current = routeToIcon;
    }
    if (!routeIconMap.current) {
      routeIconMap.current = {};
    }
  }, [routeToIcon]);
  const handleTabBarIcon = ({
    color,
    size,
    route,
  }: IconHandlerProps) => {
    if (!routeIconMap.current) {
      routeIconMap.current = {};
    }
    let icon = routeIconMap.current[route.name as string];
    if (icon === undefined) {
      icon = routeIconMap.current[route.name as string] =
        iconList.current.pop() || "gear";
    }
    return <Ionicons name={icon} size={size} color={color} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: styles.titleText,
        tabBarIcon: (params) =>
          handleTabBarIcon({ ...params, route }),
      })}
    >
      {children}
    </Tab.Navigator>
  );
}
