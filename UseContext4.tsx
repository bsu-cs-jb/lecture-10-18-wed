import React, { createContext } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
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
import { genid, log } from "./utils";
import { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

interface Reminder {
  id: string;
  name: string;
  time: number;
}
function ReminderListView(props: {
  reminderList: Reminder[];
  onCancel?: (reminder: Reminder) => void;
}) {
  const handleCancel = (reminder: Reminder) => {
    if (props.onCancel) {
      props.onCancel(reminder);
    }
  };
  return (
    <View
      style={{
        borderColor: "green",
        padding: 5,
        borderWidth: 1,
        flex: 1,
      }}
    >
      <SubtitleText>A list of reminders</SubtitleText>
      <ScrollView>
        {props.reminderList.map((reminder) => (
          <LabelText key={reminder.id}>
            Reminder: {reminder.name}
            <BigButton
              title="Cancel"
              onPress={() => handleCancel(reminder)}
            />
          </LabelText>
        ))}
      </ScrollView>
    </View>
  );
}

function GridView(props: { reminderList: Reminder[] }) {
  return (
    <View
      style={{
        borderColor: "pink",
        borderWidth: 1,
        flex: 1,
        width: "100%",
      }}
    >
      <View style={{ borderColor: "green", borderWidth: 1, flex: 1 }}>
        <SubtitleText>Something awesome</SubtitleText>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderColor: "blue",
          borderWidth: 1,
          padding: 5,
          gap: 5,
          flex: 1,
        }}
      >
        <View
          style={{
            borderColor: "orange",
            padding: 5,
            borderWidth: 1,
            flex: 1,
          }}
        >
          <SubtitleText>Something Lame</SubtitleText>
        </View>
        <ReminderListView reminderList={props.reminderList} />
      </View>
    </View>
  );
}

export default function UseContext4() {
  // Prop drilling
  const [reminderList, setReminderList] = useState<Reminder[]>([
    {
      id: genid(),
      name: "Feed the dogs",
      time: 232342134,
    },
  ]);

  return (
    <LctAvoidingView style={styles.container}>
      <GridView reminderList={reminderList} />
    </LctAvoidingView>
  );
}

const compStyles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 50,
    width: "80%",
    height: "100%",
    backgroundColor: "gray",
  },
});
