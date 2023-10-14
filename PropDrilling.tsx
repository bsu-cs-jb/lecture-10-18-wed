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
    <View style={styles.reminderListSection}>
      <SubtitleText>A list of reminders</SubtitleText>
      <ScrollView style={sharedStyles.scrollContainer}>
        {props.reminderList.map((reminder) => (
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
  ]);

  return (
    <LctAvoidingView style={sharedStyles.container}>
      <GridView reminderList={reminderList} />
    </LctAvoidingView>
  );
}

const REF_STYLES = StyleSheet.create({
  BOX_STYLES: {
    borderWidth: 2,
    flex: 1,
    padding: 5,
    gap: 5,
    width: "100%",
  },
});

const styles = StyleSheet.create({
  grid: {
    ...REF_STYLES.BOX_STYLES,
    borderColor: "pink",
  },
  dailyNews: {
    ...REF_STYLES.BOX_STYLES,
    borderColor: "blue",
  },
  bottomHalf: {
    ...REF_STYLES.BOX_STYLES,
    flexDirection: "row",
    borderColor: "purple",
  },
  recentPhotos: {
    ...REF_STYLES.BOX_STYLES,
    borderColor: "orange",
  },
  reminderListSection: {
    ...REF_STYLES.BOX_STYLES,
    borderColor: "green",
  },
  reminderList: {
    gap: 2,
  },
});
