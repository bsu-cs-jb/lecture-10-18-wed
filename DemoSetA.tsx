import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RenderApp1 from "./RenderApp1";
import RenderApp2 from "./RenderApp2";
import RenderApp3 from "./RenderApp3";
import RenderApp1b from "./RenderApp1b";
import RenderApp4 from "./RenderApp4";

const Tab = createBottomTabNavigator();
export default function DemoSetA() {
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
