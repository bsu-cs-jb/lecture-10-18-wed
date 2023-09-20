import { Button, TextInput, View } from "react-native";
import {
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  LctView,
  RenderHighlightView,
  TitleText,
} from "./Shared";
import styles from "./styles";
import { useState } from "react";

export function RenderApp1() {
  const [name, setName] = useState("Barney");

  const changeNameTo = name == "Barney" ? "Suzie" : "Barney";

  const handleChangName = () => {
    setName(changeNameTo);
  };

  const handleBarney = () => {
    setName("Barney");
  };
  return (
    <LctAvoidingView style={styles.container}>
      <TitleText>Render App 1</TitleText>
      <FlexFill />
      <LabelText>{name}</LabelText>
      <LctHorzContainer>
        <LabelText>Set name to:</LabelText>
        <Button title={changeNameTo} onPress={handleChangName} />
        <Button title="Barney" onPress={handleBarney} />
      </LctHorzContainer>
      <LctHorzContainer>
        <TextInput style={styles.input} />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
