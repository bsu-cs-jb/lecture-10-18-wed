import { Button, TextInput, View } from "react-native";
import {
  FlexFill,
  LctAvoidingView,
  LctHorzContainer,
  SubtitleText,
} from "./Shared";
import styles from "./styles";
import { useEffect, useState } from "react";
import { ts } from "./utils";

export default function SetBDemo1() {
  const [timerState, setTimerState] = useState("stop");

  useEffect(() => {
    console.log(`useEffect(${ts()})`);
    if (timerState == "running") {
      const id = setInterval(() => {
        console.log(`interval(${ts()})`);
      }, 1000);
      console.log(`setInterval(${id}) - ${ts()}`);
      return () => {
        console.log(`clearInterval(${id}) - ${ts()}`);
        clearInterval(id);
      };
    }
  }, [timerState]);

  const handleReset = () => {
    setTimerState("stop");
  };

  const handleStop = () => {
    setTimerState("stop");
  };

  const handleStart = () => {
    setTimerState("running");
  };

  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText>Timer, no state</SubtitleText>
      <FlexFill />
      <LctHorzContainer>
        <Button title="Reset" onPress={handleReset} />
        <Button title="Stop" onPress={handleStop} />
        <Button title="Start" onPress={handleStart} />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
