import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";

import styles from "./styles";
import {
  FlexFill,
  LabelText,
  RenderHighlightView,
  SubtitleText,
  TitleText,
} from "./Shared";

import { ts } from "./utils";

export default function LectureApp() {
  const [birdInputText, setBirdInputText] = useState("");
  const [birdText, setBirdText] = useState("No birds here yet.");
  const [submissions, setSubmissions] = useState(0);
  const [cancelations, setCancelations] = useState(0);
  console.log(`LectureApp(${ts()})`);

  const handleCancel = () => {
    setBirdInputText("");
    Keyboard.dismiss();
    setCancelations(cancelations + 1);
  };

  const handleSubmit = () => {
    setSubmissions(submissions + 1);
    const newBird = birdInputText.trim();
    if (newBird.length > 0) {
      if (birdText == "No birds here yet.") {
        setBirdText("- " + newBird);
      } else {
        setBirdText(birdText + "\n- " + newBird);
      }
      setBirdInputText("");
    }
  };

  const handleLabelChange = (text: string) => {
    setBirdInputText(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.avoidingView}
    >
      <RenderHighlightView style={styles.container}>
        <TitleText>Lecture Base Repo</TitleText>
        <SubtitleText>A decent place to start</SubtitleText>
        <ScrollView style={styles.scrollContainer}>
          <LabelText>{birdText}</LabelText>
        </ScrollView>
        <LabelText>
          You have submitted {submissions} time(s) and canceled{" "}
          {cancelations} time(s).
        </LabelText>
        <RenderHighlightView style={styles.horzContainer}>
          <LabelText>Name your bird:</LabelText>
          <TextInput
            style={styles.input}
            value={birdInputText}
            onChangeText={handleLabelChange}
            onSubmitEditing={handleSubmit}
            blurOnSubmit={false}
          />
        </RenderHighlightView>
        <RenderHighlightView style={styles.horzContainer}>
          <Button title="Cancel" onPress={handleCancel} />
          <FlexFill />
          <Button title="Submit" onPress={handleSubmit} />
        </RenderHighlightView>
        <StatusBar style="auto" />
      </RenderHighlightView>
    </KeyboardAvoidingView>
  );
}
