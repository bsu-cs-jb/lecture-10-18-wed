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

export default function UseContext1() {
  return (
    <LctAvoidingView style={styles.container}>
      <SubtitleText>Use Context</SubtitleText>
    </LctAvoidingView>
  );
}
