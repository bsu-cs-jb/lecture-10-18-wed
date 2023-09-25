import * as React from "react";
import { Button, Switch, TextInput, View } from "react-native";
import {
  BigButton,
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  LctView,
  SubtitleText,
} from "./Shared";
import styles from "./styles";
import { useState, useEffect } from "react";
import { ts } from "./utils";

function log(text: string) {
  console.log(`${ts()}: ${text}`);
}

export default function UseEffectChangeState() {
  log(`** UseEffectChangeState() **`);
  const [name, setName] = useState("Barney");
  const [age, setAge] = useState(22);
  const [noDepsChangeState, setNoDepsChangeState] = useState(false);

  const changeNameTo = name == "Barney" ? "Suzie" : "Barney";

  const handleChangeName = () => {
    log(`handleChangeName(${changeNameTo})`);
    setName(changeNameTo);
    // WILL THE COMPONENT RENDER?
    // A - yes
    // B - no
  };

  const handleBarney = () => {
    log(`setName(Barney)`);
    setName("Barney");
  };
  const handleRandomAge = () => {
    let newAge = age;
    while (newAge === age) {
      newAge = 5 + Math.round(Math.random() * 95);
    }
    log(`handleRandomAge(${newAge})`);
    setAge(newAge);
  };

  const handle22 = () => {
    log(`setAge(22)`);
    setAge(22);
  };

  useEffect(() => {
    log(`useEffect(A) no deps change state: ${noDepsChangeState}`);
    if (noDepsChangeState) {
      log(`  - setName(${changeNameTo})`);
      setName(changeNameTo);
      setNoDepsChangeState(false);
    }
  });
  useEffect(() => {
    log(`useEffect(B) empty deps`);
  }, []);
  useEffect(() => {
    log(`useEffect(C) - name=${name} deps=[name]`);
    handleRandomAge();
  }, [name]);
  // E - none of the above

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
      <LctView style={styles.formContainer}>
        <LctView style={styles.formRow}>
          <SubtitleText>Change state in useEffect</SubtitleText>
        </LctView>
        <LctView style={styles.formRow}>
          <LctView style={styles.formColumn}>
            <LabelText>No dep</LabelText>
          </LctView>
          <LctView style={styles.formColumn}>
            <Switch
              value={noDepsChangeState}
              onValueChange={() => setNoDepsChangeState((b) => !b)}
            />
          </LctView>
        </LctView>
        <LctView style={styles.formRow}>
          <LctView style={styles.formColumn}>
            <LabelText>deps = [name]</LabelText>
          </LctView>
          <LctView style={styles.formColumn}>
            <Switch
              value={noDepsChangeState}
              onValueChange={() => setNoDepsChangeState((b) => !b)}
            />
          </LctView>
        </LctView>
        <LctView style={styles.formColumn}></LctView>
      </LctView>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
