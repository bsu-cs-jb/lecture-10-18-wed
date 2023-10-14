import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { BigButton, LabelText, SubtitleText } from "./Shared";
import { Reminder, ReminderListContext } from "./UseContext5Shared";
import sharedStyles from "./styles";

export function ReminderListView({
  onCancel,
}: {
  onCancel?: (reminder: Reminder) => void;
}) {
  const reminderList = useContext(ReminderListContext);

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
