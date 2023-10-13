import React, { createContext } from "react";
import { Button, TextInput, View } from "react-native";
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
import { useContext, useState, useEffect } from "react";

const ThemeContext = createContext("dark");

function AnotherComponent() {
  const theme = useContext(ThemeContext);

  return (
    <LctView style={styles.container}>
      <SubtitleText>Another component</SubtitleText>
      <LabelText>Theme is {theme}</LabelText>
    </LctView>
  );
}

export default function UseContext2() {
  // HOOKS MUST BE CALLED FROM HERE
  // must not be inside of loops or conditionals
  const [theme, setTheme] = useState("dark");

  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText>Use Context</SubtitleText>
      <ThemeContext.Provider value={theme}>
        <AnotherComponent />
      </ThemeContext.Provider>
      <BigButton title="Light" onPress={() => setTheme("light")} />
      <BigButton title="Dark" onPress={() => setTheme("dark")} />
      <FlexFill />
    </LctAvoidingView>
  );
}
