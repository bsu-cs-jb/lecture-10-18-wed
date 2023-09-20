import React from "react";
import { StyleSheet, View } from "react-native";
import LectureApp from "./LectureApp";
import styles from "./styles";
import { RenderApp1 } from "./RenderApp1";

export default function App() {
  const birdApp = <LectureApp />;
  return (
    <View style={styles.topLevelContainer}>
      <RenderApp1 />
    </View>
  );
}
