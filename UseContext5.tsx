import React, { createContext } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import {
  FlexFill,
  LctAvoidingView,
  LctHorzContainer,
  LctView,
  SubtitleText,
} from "./Shared";
import styles from "./styles";
import { genid, log } from "./utils";
import { useContext, useState, useEffect } from "react";
import { ReminderListContext } from "./UseContext5Shared";
import { ReminderListView } from "./ReminderListView";
import { Reminder } from "./UseContext5Shared";

function GridView() {
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
        <ReminderListView />
      </View>
    </View>
  );
}

export default function UseContext5() {
  const [reminderList, setReminderList] = useState<Reminder[]>([
    {
      id: genid(),
      name: "Feed the dogs",
      time: 232342134,
    },
  ]);

  return (
    <ReminderListContext.Provider value={reminderList}>
      <LctAvoidingView style={styles.container}>
        <GridView />
      </LctAvoidingView>
    </ReminderListContext.Provider>
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
