import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";

type NewTaskProps = {
  taskName: string;
  setTaskName: Dispatch<SetStateAction<string>>;
  handleAddTask: () => void;
};

export function NewTask({
  taskName,
  setTaskName,
  handleAddTask,
}: NewTaskProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Icon name="plus-circle" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
