import { FlatList, Pressable, View } from "react-native";
import { LabelText, TitleText } from "./Shared";
import styles from "./styles";

function SubScreen({
  name,
  onPress,
}: {
  name: string;
  onPress?: (name: string) => void;
}) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? styles.screenPressed : styles.screenUnpressed
      }
      onPress={() => (onPress ? onPress(name) : null)}
    >
      <LabelText>{name}</LabelText>
    </Pressable>
  );
}

const SCREENS = [
  {
    name: "Demo Set A",
  },
  {
    name: "Demo Set B",
  },
];

export default function Home({ navigation }) {
  const handlePress = (name: string) => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.container}>
      <TitleText>Home</TitleText>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ width: "100%", gap: 10 }}
        data={SCREENS}
        renderItem={({ item }) => (
          <SubScreen name={item.name} onPress={handlePress} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
