import * as React from "react";
import { Button, View } from "react-native";
import {
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  LctView,
  SubtitleText,
} from "./Shared";
import styles from "./styles";
import { useEffect, useState } from "react";
import { ts } from "./utils";

function Demo4Subcomponent() {
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
    <LctView style={styles.container}>
      <LabelText>Timer: {elapsedTime}</LabelText>
      <LctHorzContainer>
        <Button title="Reset" onPress={handleReset} />
        <Button title="Stop" onPress={handleStop} />
        <Button title="Start" onPress={handleStart} />
      </LctHorzContainer>
    </LctView>
  );
}

export default function SetBDemo4() {
  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText>Timer, subcomponent</SubtitleText>
      <FlexFill />
      <Demo4Subcomponent />
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
