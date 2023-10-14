import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import {
  BigButton,
  LabelText,
  LctAvoidingView,
  SubtitleText,
} from "./Shared";
import sharedStyles from "./styles";
import { genid, log } from "./utils";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Reminder } from "./Reminder";

function ReminderListView({
  reminderList,
  onCancel,
}: {
  reminderList: Reminder[];
  onCancel?: (id: string) => void;
}) {
  const handleCancel = (reminder: Reminder) => {
    if (onCancel) {
      onCancel(reminder.id);
    }
  };
  return (
    <View style={styles.reminderListSection}>
      <SubtitleText>Reminders:</SubtitleText>
      <ScrollView style={sharedStyles.scrollContainer}>
        {reminderList.map((reminder) => (
          <View key={reminder.id} style={styles.reminderList}>
            <LabelText>{reminder.name}</LabelText>
            <BigButton
              title="Cancel"
              onPress={() => handleCancel(reminder)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function GridView(props: {
  reminderList: Reminder[];
  onCancelReminder: (id: string) => void;
}) {
  return useMemo(
    () => (
      <View style={styles.grid}>
        <View style={styles.dailyNews}>
          <SubtitleText>News of the day</SubtitleText>
        </View>
        <View style={styles.bottomHalf}>
          <View style={styles.recentPhotos}>
            <SubtitleText>Recent photos</SubtitleText>
          </View>
          <ReminderListView
            reminderList={props.reminderList}
            onCancel={props.onCancelReminder}
          />
        </View>
      </View>
    ),
    [props.reminderList, props.onCancelReminder],
  );
}

export default function PropDrilling() {
  // Prop drilling
  const [reminderList, setReminderList] = useState<Reminder[]>([
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

  const handleCancelReminder = (id: string) => {
    log(`handleCancelReminder(${id})`);
    setReminderList((reminders) =>
      reminders.filter((r) => r.id !== id),
    );
  };

  const handleAddReminder = () => {
    setReminderList([
      ...reminderList,
      {
        id: genid(),
        name: `Reminder ${genid().substring(9, 12)}`,
        time: Math.random() * 10e10,
      },
    ]);
  };
  return (
    <LctAvoidingView style={sharedStyles.container}>
      <BigButton title="Add Reminder" onPress={handleAddReminder} />
      <GridView
        reminderList={reminderList}
        onCancelReminder={handleCancelReminder}
      />
    </LctAvoidingView>
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
