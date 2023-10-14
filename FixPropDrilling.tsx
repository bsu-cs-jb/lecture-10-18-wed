import React from "react";
import { StyleSheet, View } from "react-native";
import { LctAvoidingView, SubtitleText } from "./Shared";
import sharedStyles from "./styles";
import { genid } from "./utils";
import { useState } from "react";
import { ReminderListContext } from "./UseContext5Shared";
import { ReminderListView } from "./ReminderListView";
import { Reminder } from "./UseContext5Shared";

function GridView() {
  return (
    <View style={styles.grid}>
      <View style={styles.dailyNews}>
        <SubtitleText>News of the day</SubtitleText>
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.recentPhotos}>
          <SubtitleText>Recent photos</SubtitleText>
        </View>
        <ReminderListView />
      </View>
    </View>
  );
}

export default function FixPropDrilling() {
  const [reminderList, _setReminderList] = useState<Reminder[]>([
    {
      id: genid(),
      name: "Feed the dogs",
      time: 232342134,
    },
    {
      id: genid(),
      name: "Take out the trash",
      time: 2323423233,
    },
  ]);

  return (
    <ReminderListContext.Provider value={reminderList}>
      <LctAvoidingView style={sharedStyles.container}>
        <GridView />
      </LctAvoidingView>
    </ReminderListContext.Provider>
  );
}

const styles = StyleSheet.create({
  grid: {
    ...sharedStyles.box,
    borderColor: "pink",
  },
  dailyNews: {
    ...sharedStyles.box,
    borderColor: "blue",
  },
  bottomHalf: {
    ...sharedStyles.box,
    flexDirection: "row",
    borderColor: "purple",
  },
  recentPhotos: {
    ...sharedStyles.box,
    borderColor: "orange",
  },
  reminderListSection: {
    ...sharedStyles.box,
    borderColor: "green",
  },
  reminderList: {
    gap: 2,
  },
});
