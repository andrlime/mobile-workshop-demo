import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(-1);

  const addTask = () => {
    if(isEditing) {
      stopEditing();
      let cur_tasks = tasks;
      cur_tasks[currentEditIndex] = task;
      setTasks(cur_tasks);
      setTask('');
    } else {
      if (task.trim() !== '') {
        setTasks([...tasks, task]);
        setTask('');
      }
    }
  };

  const clearTasks = () => {
    setTasks([]);
    stopEditing();
  }

  const setEditing = (index) => {
    setIsEditing(true);
    setCurrentEditIndex(index)
  }

  const stopEditing = () => {
    setIsEditing(false);
    setCurrentEditIndex(-1);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Simple Todo List</Text>

      <Text style={styles.label}>{isEditing ? `Now editing task ${currentEditIndex + 1}` : "Adding new task"}</Text>
      <TextInput
        style={styles.inputBox}
        value={task}
        onChangeText={(text) => setTask(text)}
        label="Add a task"
        placeholder={"Describe what you need to do here"}
      />

      <View style={{ display: "flex", flexDirection: "row"}}>
        <Button title={isEditing ? "Change" : "Add"} onPress={addTask} />
        <Button color={"red"} title="Clear Tasks" onPress={clearTasks} />
      </View>

      {tasks.map((task, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', margin: 5, padding: 10, borderWidth: 1 }}>
          <Text style={{ flex: 1 }}>{index + 1}</Text>
          <Text style={{ flex: 1 }}>{task}</Text>
          <Button title="Edit" onPress={() => {
            setEditing(index);
          }} />
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },  
  inputBox: {
    margin: 4,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 8,
    width: "80%"
  }
});
