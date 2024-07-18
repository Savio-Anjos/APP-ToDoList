import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

type TaskProps = {
  content: string;
};

export function Task({ content }: TaskProps) {
  return (
    <View style={styles.task}>
      <Icon name="circle" size={25} color="#4EA8DE" />
      <Text style={styles.taskText}>{content}</Text>
      <Icon name="trash-2" size={25} color="#808080" />
    </View>
  );
}
