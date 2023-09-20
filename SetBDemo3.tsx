import { Button, TextInput, View } from "react-native";
import {
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  SubtitleText,
  TitleText,
} from "./Shared";
import styles from "./styles";
import { useEffect, useState } from "react";
import { ts } from "./utils";

export default function SetBDemo3() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerState, setTimerState] = useState("stop");

  useEffect(() => {
    console.log(`useEffect(${ts()})`);
    if (timerState == "running") {
      const id = setInterval(() => {
        console.log(`interval(${ts()})`);
        if (timerState == "running") {
          setElapsedTime((time) => time + 1);
        }
      }, 1000);
      console.log(`setInterval(${id}) - ${ts()}`);
      return () => {
        console.log(`clearInterval(${id}) - ${ts()}`);
        clearInterval(id);
      };
    }
  }, [timerState, elapsedTime]);

  const handleReset = () => {
    setTimerState("stop");
    setElapsedTime(0);
  };

  const handleStop = () => {
    setTimerState("stop");
  };

  const handleStart = () => {
    setTimerState("running");
  };

  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText>Timer</SubtitleText>
      <FlexFill />
      <LabelText>Timer: {elapsedTime}</LabelText>
      <LctHorzContainer>
        <Button title="Reset" onPress={handleReset} />
        <Button title="Stop" onPress={handleStop} />
        <Button title="Start" onPress={handleStart} />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
