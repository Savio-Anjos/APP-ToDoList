import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    maxHeight: 100,
    position: "absolute",
    top: 175,
    width: "100%",
    paddingLeft: 16,
  },

  input: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 19,
    height: 65,
    fontSize: 16,
    color: "#808080",
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: "#262626",
    borderWidth: 0,
    borderColor: "transparent",
  },

  inputFocused: {
    borderColor: "#5E60CE",
    borderWidth: 1,
  },
  button: {
    height: 65,
    width: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    marginBottom: 10,
    marginLeft: 10,
  },
});
