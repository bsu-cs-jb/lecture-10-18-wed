import * as React from "react";
import { StyleSheet, View } from "react-native";
import LectureApp from "./LectureApp";
import styles from "./styles";
import RenderApp1 from "./RenderApp1";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RenderApp2 from "./RenderApp2";

const Tab = createBottomTabNavigator();

export default function App() {
  const birdApp = <LectureApp />;
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Demo 1" component={RenderApp1} />
        <Tab.Screen name="Demo 2" component={RenderApp2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
