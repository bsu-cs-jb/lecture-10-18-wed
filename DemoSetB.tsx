import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import SetBDemo1 from "./SetBDemo1";
import SetBDemo2 from "./SetBDemo2";
import SetBDemo3 from "./SetBDemo3";

const Tab = createBottomTabNavigator();
export default function DemoSetB() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: styles.titleText,
      }}
    >
      {/* TODO: Do something with timers */}
      <Tab.Screen name="Demo 1" component={SetBDemo1} />
      <Tab.Screen name="Demo 2" component={SetBDemo2} />
      <Tab.Screen name="Demo 3" component={SetBDemo3} />
    </Tab.Navigator>
  );
}
