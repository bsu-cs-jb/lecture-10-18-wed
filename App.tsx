import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { STACKS } from "./stacks";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {Object.entries(STACKS).map(([key, stack]) => (
          <Stack.Screen
            key={key}
            name={key}
            component={stack.component}
            options={{ title: stack.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
