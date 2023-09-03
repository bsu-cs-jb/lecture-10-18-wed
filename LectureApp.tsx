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
  const birdLabel = useRef("");
  const labelInput = useRef<TextInput>(null);
  const [birdText, setBirdText] = useState("No birds here.");
  const [submissions, setSubmissions] = useState(0);
  const [cancelations, setCancelations] = useState(0);

  const handleCancel = () => {
    if (labelInput.current) {
      labelInput.current.clear();
    }
    Keyboard.dismiss();
    setCancelations(cancelations + 1);
  };

  const handleSubmit = () => {
    setSubmissions(submissions + 1);
    const newBirds = birdLabel.current.trim();
    if (newBirds.length > 0) {
      if (birdText == "No birds here.") {
        setBirdText(newBirds);
      } else {
        setBirdText(birdText + "\n" + newBirds);
      }
      if (labelInput.current) {
        labelInput.current.clear();
      }
    }
  };

  const handleLabelChange = (text: string) => {
    birdLabel.current = text;
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
            ref={labelInput}
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
    flex: 1,
    borderWidth: 1,
  },
  scrollContainer: {
    flex: 1,
    alignSelf: "flex-start",
    width: "100%",
    // borderWidth: 1,
    // borderColor: "pink",
  },
  titleText: {
    fontSize: 30,
  },
  subTitleText: {
    fontSize: 20,
  },
  labelText: {
    fontSize: 16,
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
