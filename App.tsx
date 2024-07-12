import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="light" />
    </View>
  );
}
