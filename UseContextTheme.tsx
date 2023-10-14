import React, { createContext } from "react";
import {
  BigButton,
  FlexFill,
  LabelText,
  LctAvoidingView,
  LctView,
  SubtitleText,
} from "./Shared";
import sharedStyles from "./styles";
import { useContext, useState } from "react";

const ThemeContext = createContext("dark");

function AnotherComponent() {
  const theme = useContext(ThemeContext);

  return (
    <LctView style={sharedStyles.container}>
      <SubtitleText>Another component</SubtitleText>
      <LabelText>Theme is {theme}</LabelText>
    </LctView>
  );
}

export default function UseContextTheme() {
  // HOOKS MUST BE CALLED FROM HERE
  // must not be inside of loops or conditionals
  const [theme, setTheme] = useState("dark");

  return (
    <LctAvoidingView style={sharedStyles.container}>
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
