import { TextInput, View } from "react-native";
import {
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctHorzContainer,
  SubtitleText,
  TitleText,
} from "./Shared";
import styles from "./styles";
import { useState } from "react";

export default function RenderApp2() {
  const [name, setName] = useState("Barney");

  return (
    <LctAvoidingView style={styles.container}>
      <TitleText>Render App 2</TitleText>
      <SubtitleText>Change name directly</SubtitleText>
      <FlexFill />
      <LabelText>Name: {name}</LabelText>
      <LctHorzContainer>
        <LabelText>Enter name:</LabelText>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
