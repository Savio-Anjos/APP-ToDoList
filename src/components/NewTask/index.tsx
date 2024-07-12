import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

export function NewTask() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
      />
      <TouchableOpacity style={styles.button}>
        <Icon name="plus-circle" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
