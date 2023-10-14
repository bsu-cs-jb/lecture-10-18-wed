import React, { useCallback, useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import { BigButton, LctAvoidingView, SubtitleText } from "./Shared";
import sharedStyles from "./styles";
import { genid, log } from "./utils";
import { useState } from "react";
import { ReminderListContext } from "./Reminder";
import { ReminderListView } from "./ReminderListView";
import { Reminder } from "./Reminder";

const GridView = memo(function GridViewImpl() {
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
});

export default function FixPropDrilling() {
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

  const handleCancelReminder = useCallback(
    (id: string) => {
      log(`handleCancelReminder(${id})`);
      setReminderList((reminders) =>
        reminders.filter((r) => r.id !== id),
      );
    },
    [reminderList, setReminderList],
  );

  const reminderListContext = useMemo<ReminderListContext>(() => {
    log("creating new reminderListContext");
    return [reminderList, handleCancelReminder];
  }, [reminderList, handleCancelReminder]);

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
    <ReminderListContext.Provider value={reminderListContext}>
      <LctAvoidingView style={sharedStyles.container}>
        <BigButton title="Add Reminder" onPress={handleAddReminder} />
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
