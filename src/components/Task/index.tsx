import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

type TaskProps = {
  content: string;
  isCompleted: boolean;
  toggleTaskCompletion: () => void;
  deleteTask: () => void;
};

export function Task({
  content,
  isCompleted,
  toggleTaskCompletion,
  deleteTask,
}: TaskProps) {
  return (
    <View style={styles.task}>
      <Icon
        onPress={toggleTaskCompletion}
        name={isCompleted ? "check-circle" : "circle"}
        size={25}
        color={isCompleted ? "#5E60CE" : "#4EA8DE"}
      />

      <Text style={[styles.taskText, isCompleted && styles.through]}>
        {content}
      </Text>
      <Icon onPress={deleteTask} name="trash-2" size={25} color="#808080" />
    </View>
  );
}
