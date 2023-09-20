import { Button, TextInput, View } from "react-native";
import {
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  LctView,
  SubtitleText,
  TitleText,
} from "./Shared";
import styles from "./styles";
import { useState } from "react";

function App1bSubcomponent() {
  const [name, setName] = useState("Barney");

  const changeNameTo = name == "Barney" ? "Suzie" : "Barney";

  const handleChangeName = () => {
    console.log(`handleChangeName(${changeNameTo})`);
    setName(changeNameTo);
  };

  const handleBarney = () => {
    console.log(`setName(Barney)`);
    setName("Barney");
  };
  return (
    <LctView style={styles.container}>
      <LabelText>Name: {name}</LabelText>
      <LctHorzContainer>
        <LabelText>Set name to:</LabelText>
        <Button title={changeNameTo} onPress={handleChangeName} />
        <Button title="Barney" onPress={handleBarney} />
      </LctHorzContainer>
      <LctHorzContainer>
        <TextInput style={styles.input} />
      </LctHorzContainer>
    </LctView>
  );
}

export default function RenderApp1b() {
  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText>Subcomponent</SubtitleText>
      <FlexFill />
      <App1bSubcomponent />
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
