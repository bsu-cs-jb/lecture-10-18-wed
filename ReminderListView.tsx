import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { BigButton, LabelText, SubtitleText } from "./Shared";
import { Reminder, ReminderListContext } from "./UseContext5Shared";

export function ReminderListView(props: {
  onCancel?: (reminder: Reminder) => void;
}) {
  const reminderList = useContext(ReminderListContext);

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
        {reminderList.map((reminder) => (
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
