import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { AppStackParamList, STACKS } from "./stacks";

const Stack = createStackNavigator<AppStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {Object.values(STACKS).map((stack) => (
          <Stack.Screen
            key={stack.key}
            name={stack.key}
            component={stack.component}
            options={{ title: stack.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
