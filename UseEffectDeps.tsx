import * as React from "react";
import { Button, TextInput, View } from "react-native";
import {
  BigButton,
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  SubtitleText,
} from "./Shared";
import styles from "./styles";
import { useState, useEffect } from "react";
import { ts } from "./utils";

function log(text: string) {
  console.log(`${ts()}: ${text}`);
}

export default function UseEffectDeps() {
  log(`** UseEffectDeps() **`);
  const [name, setName] = useState("Barney");
  const [age, setAge] = useState(22);

  const changeNameTo = name == "Barney" ? "Suzie" : "Barney";

  const handleChangeName = () => {
    log(`handleChangeName(${changeNameTo})`);
    setName(changeNameTo);
  };

  const handleBarney = () => {
    log(`setName(Barney)`);
    setName("Barney");
  };
  const handleRandomAge = () => {
    const newAge = 5 + Math.round(Math.random() * 95);
    log(`handleRandomAge(${newAge})`);
    setAge(newAge);
  };

  const handle22 = () => {
    log(`setAge(22)`);
    setAge(22);
  };

  useEffect(() => {
    log(`useEffect() no deps`);
  });
  useEffect(() => {
    log(`useEffect() empty deps`);
  }, []);
  useEffect(() => {
    log(`useEffect(${name}) deps=[name]`);
  }, [name]);

  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText></SubtitleText>
      <FlexFill />
      <LabelText>Name: {name}</LabelText>
      <LabelText>Age: {age}</LabelText>
      <LctHorzContainer>
        <LabelText>Set name to:</LabelText>
        <BigButton title={changeNameTo} onPress={handleChangeName} />
        <BigButton title="Barney" onPress={handleBarney} />
      </LctHorzContainer>
      <LctHorzContainer>
        <LabelText>Set age to:</LabelText>
        <BigButton title="Random" onPress={handleRandomAge} />
        <BigButton title="22" onPress={handle22} />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
