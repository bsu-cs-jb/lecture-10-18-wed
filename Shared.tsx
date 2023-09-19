import { Text, TextProps, View } from "react-native";
import styles from "./styles";

export function LabelText(props: TextProps) {
  return <Text style={styles.labelText}>{props.children}</Text>;
}

export function TitleText(props: TextProps) {
  return <Text style={styles.titleText}>{props.children}</Text>;
}
export function SubtitleText(props: TextProps) {
  return <Text style={styles.subTitleText}>{props.children}</Text>;
}

export function FlexFill() {
  return <View style={styles.flexFill} />;
}

// TODO: Add a BigButton class for lecture
