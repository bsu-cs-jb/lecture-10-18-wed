import { StyleSheet, View } from "react-native";
import LectureApp from "./LectureApp";
import styles from "./styles";

export default function App() {
  return (
    <View style={[appStyles.safeArea, styles.topLevelContainer]}>
      <LectureApp />
    </View>
  );
}

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 20,
  },
});
