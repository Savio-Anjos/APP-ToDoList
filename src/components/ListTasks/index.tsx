import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../Task";
import { initialTasks } from "../../data/tasks";
import { NewTask } from "../NewTask";

export function ListTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [taskName, setTaskName] = useState<string>("");

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const verifyCount = (typeTask: string) => {
    if (typeTask === "created") {
      return tasks.filter((task) => task.isCompleted === false).length;
    }

    if (typeTask === "completed") {
      return tasks.filter((task) => task.isCompleted === true).length;
    }

    return tasks.length;
  };

  const handleAddTask = () => {
    const count = verifyCount("");

    const newTask: Task = {
      id: count + 1,
      task: taskName,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

  return (
    <>
      <NewTask
        taskName={taskName}
        setTaskName={setTaskName}
        handleAddTask={handleAddTask}
      />
      <View style={styles.container}>
        <View style={styles.containerCounter}>
          <View style={styles.counters}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.counterText}>{verifyCount("created")}</Text>
          </View>

          <View style={styles.counters}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.counterText}>{verifyCount("completed")}</Text>
          </View>
        </View>
        <View style={styles.tasks}>
          <FlatList
            data={sortedTasks}
            keyExtractor={(task) => task.id.toString()}
            renderItem={({ item }) => (
              <Task
                content={item.task}
                isCompleted={item.isCompleted}
                toggleTaskCompletion={() => toggleTaskCompletion(item.id)}
                deleteTask={() => deleteTask(item.id)}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}
