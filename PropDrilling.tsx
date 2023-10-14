import React from "react";
import { StyleSheet, View } from "react-native";
import {
  BigButton,
  LabelText,
  LctAvoidingView,
  SubtitleText,
} from "./Shared";
import sharedStyles from "./styles";
import { genid } from "./utils";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

interface Reminder {
  id: string;
  name: string;
  time: number;
}
function ReminderListView({
  reminderList,
  onCancel,
}: {
  reminderList: Reminder[];
  onCancel?: (reminder: Reminder) => void;
}) {
  const handleCancel = (reminder: Reminder) => {
    if (onCancel) {
      onCancel(reminder);
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

function GridView(props: { reminderList: Reminder[] }) {
  return (
    <View style={styles.grid}>
      <View style={styles.dailyNews}>
        <SubtitleText>News of the day</SubtitleText>
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.recentPhotos}>
          <SubtitleText>Recent photos</SubtitleText>
        </View>
        <ReminderListView reminderList={props.reminderList} />
      </View>
    </View>
  );
}

export default function PropDrilling() {
  // Prop drilling
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
    <LctAvoidingView style={sharedStyles.container}>
      <GridView reminderList={reminderList} />
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
