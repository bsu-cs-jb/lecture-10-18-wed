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
interface Props {
  name?: string;
  onChangeName?: (name: string) => void;
}
function App4Subcomponent({ name, onChangeName }: Props) {
  // const [name, setName] = useState("Barney");
  const [inputValue, setInputValue] = useState(name);

  const handleReset = () => {
    console.log(`handleReset()`);
    setInputValue("");
  };

  const handleSubmit = () => {
    console.log(`handleSubmit(${inputValue})`);
    if (onChangeName && inputValue !== undefined) {
      onChangeName(inputValue);
    }
  };

  return (
    <LctView style={styles.container}>
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
    </LctView>
  );
}

export default function RenderApp4() {
  const [name, setName] = useState("Barney");

  return (
    <LctAvoidingView style={styles.container}>
      <TitleText>Render App 4</TitleText>
      <SubtitleText>Subcomponent with callback</SubtitleText>
      <FlexFill />
      <LabelText>Name: {name}</LabelText>
      <App4Subcomponent name={name} onChangeName={setName} />
      <View style={{ flex: 4 }} />
    </LctAvoidingView>
  );
}
