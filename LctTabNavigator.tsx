import React from "react";
import { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

export type IoniconIcons = keyof typeof Ionicons.glyphMap;

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
  routeToIcon?: Record<string, IoniconIcons | undefined>;
  children: any;
}) {
  const iconFallbackMap = useRef<NonNullable<typeof routeToIcon>>({});
  const iconList = useRef<IoniconIcons[]>([
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
    "briefcase",
    "brush",
    "bug",
    "chevron-down",
    "chevron-up",
    "clipboard",
    "cog",
    "compass",
    "copy",
    "crop",
    "document",
    "documents",
    "flash",
    "flashlight",
    "flower",
    "folder",
    "funnel",
    "game-controller",
    "globe",
    "grid",
    "help",
    "images",
    "language",
    "layers",
    "leaf",
    "list",
    "location",
    "lock-open",
    "log-out",
    "magnet",
    "medal",
    "megaphone",
    "mic",
    "moon",
    "notifications-off",
    "paper-plane",
    "pencil",
    "pie-chart",
    "pin",
    "print",
    "rocket",
    "share",
    "shield",
    "shuffle",
    "stopwatch",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "trash",
    "trophy",
    "tv",
    "water",
    "cart",
    "refresh",
    "alert-circle",
    "aperture",
    "arrow-down-circle",
    "arrow-up-circle",
    "bar-chart",
    "battery-charging",
    "bluetooth",
    "disc",
    "eye-off",
    "film",
    "git-branch",
    "git-commit",
  ]);

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
