import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "./src/components/Header";
import { NewTask } from "./src/components/NewTask";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTask />
      <StatusBar style="light" />
    </View>
  );
}
