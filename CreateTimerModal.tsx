import React, { createContext } from "react";
import { Modal, StyleSheet, View } from "react-native";
import {
  BigButton,
  LabelText,
  LctAvoidingView,
  LctView,
  SubtitleText,
} from "./Shared";
import sharedStyles from "./styles";
import { genid, log } from "./utils";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

interface Reminder {
  id: string;
  name: string;
  time: number;
}

interface EditReminderProps {
  reminderType: "create" | "edit";
  reminder?: Reminder;
  onConfirm: (reminder: Reminder) => void;
  onCancel: () => void;
}

function EditReminder({
  reminderType,
  reminder,
  onCancel,
  onConfirm,
}: EditReminderProps) {
  const handleCancel = () => {
    onCancel();
  };
  const handleConfirm = () => {
    if (reminder) {
      onConfirm(reminder);
    } else {
      onCancel();
    }
  };
  return (
    <View>
      <LabelText>
        {reminderType === "create" ? "Create New" : "Edit"} Reminder
      </LabelText>
      <LabelText>id: {reminder?.id}</LabelText>
      <LabelText>name: {reminder?.name}</LabelText>
      <LabelText>time: {reminder?.time}</LabelText>
      <BigButton title="Cancel" onPress={handleCancel} />
      <BigButton title="Confirm" onPress={handleConfirm} />
    </View>
  );
}

export default function CreateTimerModal() {
  const [reminderList, setReminderList] = useState<Reminder[]>([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingReminder, setEditingReminder] = useState<
    Reminder | undefined
  >();

  const handleCreateReminder = () => {
    log("handleCreateReminder");
    setEditingReminder({
      id: genid(),
      name: "New Reminder",
      time: 30,
    });
    setEditModalVisible(true);
  };
  const handleConfirm = (reminder: Reminder) => {
    setEditModalVisible(false);
    if (editingReminder) {
      setReminderList([...reminderList, editingReminder]);
    }
  };
  const handleCancel = () => {
    setEditModalVisible(false);
  };
  const handleEdit = (reminder: Reminder) => {
    log("handleEdit");
    setEditingReminder(reminder);
    setEditModalVisible(true);
  };
  return (
    <LctAvoidingView style={sharedStyles.container}>
      <Modal visible={editModalVisible}>
        <LctView style={styles.modal}>
          <SubtitleText>This is my modal</SubtitleText>
          <EditReminder
            reminderType="create"
            reminder={editingReminder}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </LctView>
      </Modal>
      <SubtitleText>Create Reminder</SubtitleText>
      <ScrollView style={sharedStyles.scrollContainer}>
        {reminderList.map((reminder) => (
          <View key={reminder.id} style={sharedStyles.container}>
            <LabelText>id: {reminder?.id}</LabelText>
            <LabelText>name: {reminder?.name}</LabelText>
            <LabelText>time: {reminder?.time}</LabelText>
            <BigButton
              title="Edit"
              onPress={() => handleEdit(reminder)}
            />
          </View>
        ))}
      </ScrollView>
      <BigButton
        title="Create Reminder"
        onPress={handleCreateReminder}
      />
    </LctAvoidingView>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 50,
    width: "80%",
    height: "100%",
    backgroundColor: "gray",
  },
});
