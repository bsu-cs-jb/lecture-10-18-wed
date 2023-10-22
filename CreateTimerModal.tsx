import React from "react";
import { Modal, StyleSheet, View, ScrollView } from "react-native";
import {
  BigButton,
  LabelText,
  LctAvoidingView,
  LctView,
  SubtitleText,
  TitleText,
} from "./Shared";
import sharedStyles from "./styles";
import { genid, log } from "./utils";
import { useState } from "react";

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
  const handleCancelChild = () => {
    onCancel();
  };
  const handleConfirmChild = () => {
    if (reminder) {
      onConfirm({
        ...reminder,
        time: reminder.time + 10,
      });
    } else {
      // should never get here
      onCancel();
    }
  };
  return (
    <View style={styles.editReminder}>
      <TitleText>
        {reminderType === "create" ? "Create New" : "Edit"} Reminder
      </TitleText>
      <LabelText>id: {reminder?.id}</LabelText>
      <LabelText>name: {reminder?.name}</LabelText>
      <LabelText>time: {reminder?.time}</LabelText>
      <BigButton title="Cancel" onPress={handleCancelChild} />
      <BigButton title="Confirm" onPress={handleConfirmChild} />
    </View>
  );
}

export default function CreateTimerModal() {
  const [reminderList, setReminderList] = useState<Reminder[]>([
    {
      id: genid(),
      name: "Walk the dog",
      time: 20,
    },
    {
      id: genid(),
      name: "Take out the trash",
      time: 80,
    },
  ]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editOrCreate, setEditOrCreate] = useState<"create" | "edit">(
    "create",
  );
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
    setEditOrCreate("create");
  };
  const handleConfirmParent = (updatedReminder: Reminder) => {
    setEditModalVisible(false);
    if (editOrCreate === "edit") {
      // make a new reminder list... because React
      const updateReminderList = [];
      // for each reminder in the list
      for (const reminder of reminderList) {
        // if this is the reminder I want to update
        if (reminder.id === updatedReminder.id) {
          // then put the updated reminder in the new list
          updateReminderList.push(updatedReminder);
        } else {
          // if not, then put the current reminder in the new list
          updateReminderList.push(reminder);
        }
      }

      setReminderList((rl) =>
        rl.map((r) =>
          r.id === updatedReminder.id ? updatedReminder : r,
        ),
      );
    } else {
      setReminderList([...reminderList, updatedReminder]);
    }
  };
  const handleCancelParent = () => {
    setEditModalVisible(false);
  };
  const handleEdit = (reminder: Reminder) => {
    log(`handleEdit: ${reminder.name}`);
    // make a copy
    setEditingReminder({ ...reminder });
    setEditModalVisible(true);
    setEditOrCreate("edit");
  };
  return (
    <LctAvoidingView style={sharedStyles.container}>
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}
      >
        <LctView style={styles.modal}>
          <EditReminder
            reminderType={editOrCreate}
            reminder={editingReminder}
            onConfirm={handleConfirmParent}
            onCancel={handleCancelParent}
          />
        </LctView>
      </Modal>
      <SubtitleText>Create Reminder</SubtitleText>
      <ScrollView
        style={sharedStyles.scrollView}
        contentContainerStyle={sharedStyles.scrollContent}
      >
        {reminderList.map((reminder) => (
          <View key={reminder.id} style={styles.editReminder}>
            <LabelText>name: {reminder.name}</LabelText>
            <LabelText>time: {reminder.time}</LabelText>
            <BigButton
              title="Edit"
              style={{ width: 90 }}
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
    alignItems: "flex-start",
  },
  editReminder: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "flex-start",
    gap: 5,
    paddingVertical: 5,
  },
  modalReminder: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    gap: 5,
  },
});
