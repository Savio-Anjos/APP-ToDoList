import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
  },

  containerCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  counters: {
    flexDirection: "row",
    paddingHorizontal: 17,
    justifyContent: "center",
    alignItems: "center",
  },

  created: {
    color: "#4EA8DE",
    fontSize: 18,
    fontWeight: "bold",
    paddingEnd: 9,
  },

  completed: {
    color: "#5E60CE",
    fontSize: 18,
    fontWeight: "bold",
    paddingEnd: 9,
  },

  counterText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#333333",
    padding: 6,
    paddingHorizontal: 16,
    borderRadius: 19,
  },
  tasks: {
    flex: 1,
    paddingHorizontal: 19,
    marginTop: 19,
    marginBottom: 20,
    borderWidth: 1,
    paddingVertical: 0,
  },
});
