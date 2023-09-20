import "react-native-gesture-handler";
import * as React from "react";
import LectureApp from "./LectureApp";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import DemoSetA from "./DemoSetA";
import DemoSetB from "./DemoSetB";

const Stack = createStackNavigator();

export default function App() {
  const birdApp = <LectureApp />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Demo Set A" component={DemoSetA} />
        <Stack.Screen name="Demo Set B" component={DemoSetB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
