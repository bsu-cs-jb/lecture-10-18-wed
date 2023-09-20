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
import { useState } from "react";

export default function RenderApp2() {
  const [name, setName] = useState("Barney");
  const [inputValue, setInputValue] = useState("Barney");

  const changeNameTo = name == "Barney" ? "Suzie" : "Barney";

  const handleReset = () => {
    setInputValue("");
  };

  const handleSubmit = () => {
    setName(inputValue);
  };

  return (
    <LctAvoidingView style={styles.container}>
      <TitleText>Render App 2</TitleText>
      <SubtitleText>Change name on submit</SubtitleText>
      <FlexFill />
      <LabelText>Name: {name}</LabelText>
      <LctHorzContainer>
        <LabelText>Enter name:</LabelText>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleSubmit}
        />
      </LctHorzContainer>
      <LctHorzContainer>
        <Button title="Reset" onPress={handleReset} />
        <View style={{ flex: 0.2 }} />
        <Button title="Submit" onPress={handleSubmit} />
      </LctHorzContainer>
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
