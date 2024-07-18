import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "./src/components/Header";
import { NewTask } from "./src/components/NewTask";
import { ListTasks } from "./src/components/ListTasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTask />
      <ListTasks />
      <StatusBar style="light" />
    </View>
  );
}
