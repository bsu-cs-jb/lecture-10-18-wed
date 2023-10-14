import { StyleSheet } from "react-native";

const sharedStyles = StyleSheet.create({
  box: {
    borderWidth: 2,
    flex: 1,
    padding: 5,
    gap: 5,
    width: "100%",
  },
  screenUnpressed: {
    backgroundColor: "#DDE",
    borderRadius: 8,
    padding: 6,
    width: "100%",
  },
  screenPressed: {
    backgroundColor: "#BBE",
    borderRadius: 8,
    padding: 6,
  },
  bigButtonUnpressed: {
    backgroundColor: "#33C9FF",
    borderRadius: 8,
    padding: 6,
  },
  bigButtonPressed: {
    backgroundColor: "#85DEFF",
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
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    gap: 5,
  },
  stackContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
    gap: 5,
  },
  formContainer: {
    flexDirection: "column",
    gap: 10,
    flexWrap: "wrap",
  },
  formRow: {
    width: "100%",
    flexDirection: "row",
  },
  formColumn: {
    flex: 0.5,
  },
});

export default sharedStyles;
