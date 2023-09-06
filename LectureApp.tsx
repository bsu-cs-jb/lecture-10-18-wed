import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LectureApp() {
  const [birdInputText, setBirdInputText] = useState("");
  const [birdText, setBirdText] = useState("No birds here yet.");
  const [submissions, setSubmissions] = useState(0);
  const [cancelations, setCancelations] = useState(0);

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
      <View style={styles.container}>
        <Text style={styles.titleText}>Lecture Base Repo</Text>
        <Text style={styles.subTitleText}>A decent place to start</Text>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.labelText}>{birdText}</Text>
        </ScrollView>
        <Text style={styles.labelText}>
          You have submitted {submissions} time(s) and canceled {cancelations}{" "}
          time(s).
        </Text>
        <View style={styles.horzContainer}>
          <Text style={styles.labelText}>Name your bird:</Text>
          <TextInput
            style={styles.input}
            value={birdInputText}
            onChangeText={handleLabelChange}
            onSubmitEditing={handleSubmit}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.horzContainer}>
          <Button title="Cancel" onPress={handleCancel} />
          <View style={styles.flexFill} />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
}

export const styles = StyleSheet.create({
  flexFill: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    borderWidth: 1,
    padding: 3,
  },
  scrollContainer: {
    flex: 1,
    alignSelf: "flex-start",
    width: "100%",
  },
  titleText: {
    fontSize: 30,
  },
  subTitleText: {
    fontSize: 20,
  },
  labelText: {
    fontSize: 18,
  },
  horzContainer: {
    flexDirection: "row",
    gap: 10,
  },
  topLevelContainer: {
    // Add styles here to affect the outer App component
    // or leave empty if you do not need to change it.
  },
  avoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
});
