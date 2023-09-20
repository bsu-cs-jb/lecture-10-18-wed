import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenUnpressed: {
    backgroundColor: "#DDE",
    borderRadius: 8,
    padding: 6,
    // paddingHorizontal: 15,
    width: "100%",
  },
  screenPressed: {
    backgroundColor: "#BBE",
    borderRadius: 8,
    padding: 6,
  },
  flexFill: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    borderWidth: 1,
    padding: 7,
  },
  scrollContainer: {
    flex: 1,
    alignSelf: "flex-start",
    width: "100%",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 26,
  },
  labelText: {
    fontSize: 22,
  },
  text: {
    fontSize: 16,
  },
  horzContainer: {
    flexDirection: "row",
    gap: 10,
  },
  topLevelContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 20,
  },
  avoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
});

export default styles;
