import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SetADemo1 from "./SetADemo1";
import SetADemo3 from "./SetADemo3";
import SetADemo4 from "./SetADemo4";
import SetADemo2 from "./SetADemo2";
import SetADemo5 from "./SetADemo5";
import styles from "./styles";

const Tab = createBottomTabNavigator();
export default function DemoSetA() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: styles.titleText,
      }}
    >
      <Tab.Screen name="Demo 1" component={SetADemo1} />
      <Tab.Screen name="Demo 2" component={SetADemo2} />
      <Tab.Screen name="Demo 3" component={SetADemo3} />
      <Tab.Screen name="Demo 4" component={SetADemo4} />
      <Tab.Screen name="Demo 5" component={SetADemo5} />
    </Tab.Navigator>
  );
}
