import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { BigButton, LabelText, SubtitleText } from "./Shared";
import { ReminderListContext } from "./Reminder";
import sharedStyles from "./styles";

export function ReminderListView() {
  const [reminderList, handleCancelReminder] = useContext(
    ReminderListContext,
  );

  return (
    <View style={styles.reminderListSection}>
      <SubtitleText>Reminders:</SubtitleText>
      <ScrollView style={sharedStyles.scrollContainer}>
        {reminderList.map((reminder) => (
          <View key={reminder.id} style={styles.reminderList}>
            <LabelText>{reminder.name}</LabelText>
            <BigButton
              title="Cancel"
              onPress={() => handleCancelReminder(reminder.id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  reminderListSection: {
    ...sharedStyles.box,
    borderColor: "green",
  },
  reminderList: {
    gap: 2,
  },
});
