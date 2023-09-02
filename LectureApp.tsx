import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function LectureApp() {
  // duration of the timer in milliseconds (ms)
  // 1 second == 1000 ms
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // setInterval - ask for a callback every 1000 ms
    // - save the id of the interval to clear it when the component re-renders
    const id = setInterval(() => {
      // when the interval has passed, update the duration
      // NOTE: this is not exactly accurate since more or less than 1 second
      // may have passed since the previous update. This is acceptable for
      // Lab 2 but if you want to fix it you can earn bonus points.
      setDuration(duration + 1);
    }, 1000);
    // return a function to clear (remove) the interval when the
    // component re-renders
    return () => {
      clearInterval(id);
    };
  }, [duration]);

  return (
    <View style={styles.container}>
      <Text>Test: {duration}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  topLevelContainer: {
    // Add styles here to affect the outer App component
    // or leave empty if you do not need to change it.
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
