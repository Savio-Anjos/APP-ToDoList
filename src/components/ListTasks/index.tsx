import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Task } from "../Task";
import { initialTasks } from "../../data/tasks";

export function ListTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <View style={styles.container}>
      <View style={styles.containerCounter}>
        <View style={styles.counters}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.counterText}>5</Text>
        </View>

        <View style={styles.counters}>
          <Text style={styles.completed}>Concluídas</Text>
          <Text style={styles.counterText}>2</Text>
        </View>
      </View>
      <View style={styles.tasks}>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id.toString()}
          renderItem={({ item }) => <Task content={item.task} />}
        />
      </View>
    </View>
  );
}
