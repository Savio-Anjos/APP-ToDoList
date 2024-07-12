import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";
import { useState } from "react";

export function NewTask() {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity style={styles.button}>
        <Icon name="plus-circle" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
