import * as React from "react";
import { FlatList, Pressable, View } from "react-native";
import { LabelText, TitleText } from "./Shared";
import styles from "./styles";
import { STACKS } from "./stacks";

function SubScreen({
  screenName,
  title,
  onPress,
}: {
  screenName: string;
  title: string;
  onPress?: (screenName: string) => void;
}) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? styles.screenPressed : styles.screenUnpressed
      }
      onPress={() => (onPress ? onPress(screenName) : null)}
    >
      <LabelText>{title}</LabelText>
    </Pressable>
  );
}

export default function Home({ navigation }) {
  const handlePress = (name: string) => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={styles.stackContainer}
        data={Object.values(STACKS)}
        renderItem={({ item }) => (
          <SubScreen
            screenName={item.key}
            title={item.title}
            onPress={handlePress}
          />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
