import * as React from "react";
import { Button, Switch, TextInput, View } from "react-native";
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

export default function UseEffectWhen() {
  // log(`** UseEffectWhen() START **`);
  const [name, setName] = useState("Barney");
  const [age, setAge] = useState(22);
  const [noDepsChangeState, setNoDepsChangeState] = useState(false);

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
    if (noDepsChangeState) {
      log(`  - setName(${changeNameTo})`);
      setName(changeNameTo);
      setNoDepsChangeState(false);
    }
  });
  useEffect(() => {
    log(`useEffect() empty deps`);
  }, []);
  useEffect(() => {
    log(`useEffect(${name}) deps=[name]`);
  }, [name]);

  // log(`** UseEffectWhen() END **`);
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
      <LctHorzContainer>
        <LabelText>No dep useEffect</LabelText>
        <Switch
          value={noDepsChangeState}
          onValueChange={() => setNoDepsChangeState((b) => !b)}
        />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
