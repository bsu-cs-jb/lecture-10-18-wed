import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RenderApp1 from "./RenderApp1";
import RenderApp2 from "./RenderApp2";
import RenderApp3 from "./RenderApp3";
import RenderApp1b from "./RenderApp1b";
import RenderApp4 from "./RenderApp4";

const Tab = createBottomTabNavigator();
export default function DemoSetB() {
  return (
    <Tab.Navigator>
      {/* TODO: Do something with timers */}
      <Tab.Screen name="Demo 1" component={RenderApp1} />
    </Tab.Navigator>
  );
}
