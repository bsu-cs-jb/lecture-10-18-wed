import "react-native-gesture-handler";
import * as React from "react";
import LectureApp from "./LectureApp";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import RenderApp1 from "./RenderApp1";
import RenderApp2 from "./RenderApp2";
import RenderApp3 from "./RenderApp3";
import RenderApp1b from "./RenderApp1b";
import RenderApp4 from "./RenderApp4";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import { LabelText, TitleText } from "./Shared";
import styles from "./styles";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SubScreen({
  name,
  onPress,
}: {
  name: string;
  onPress?: (name: string) => void;
}) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? styles.screenPressed : styles.screenUnpressed
      }
      onPress={() => (onPress ? onPress(name) : null)}
    >
      <LabelText>{name}</LabelText>
    </Pressable>
  );
}

const SCREENS = [
  {
    name: "Demo Set A",
  },
  {
    name: "Demo Set B",
  },
];

export function Home({ navigation }) {
  const handlePress = (name: string) => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.container}>
      <TitleText>Home</TitleText>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ width: "100%", gap: 10 }}
        data={SCREENS}
        renderItem={({ item }) => (
          <SubScreen name={item.name} onPress={handlePress} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export function DemoSetA() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Demo 1" component={RenderApp1} />
      <Tab.Screen name="Demo 1b" component={RenderApp1b} />
      <Tab.Screen name="Demo 2" component={RenderApp2} />
      <Tab.Screen name="Demo 3" component={RenderApp3} />
      <Tab.Screen name="Demo 4" component={RenderApp4} />
    </Tab.Navigator>
  );
}

export default function App() {
  const birdApp = <LectureApp />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Demo Set A" component={DemoSetA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
