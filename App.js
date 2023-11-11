import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [state, setState] = useState(0);

  const addTask = () => {
    
  };

  const clearTasks = () => {
    
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Simple Todo List</Text>

      <Text style={styles.label}>Creating a new task!</Text>
      <TextInput
        style={styles.inputBox}
        value={...}
        onChangeText={...}
        label="Add a task"
        placeholder={"Describe what you need to do here"}
      />

      <Text>If your code works properly, then your text should also appear here: {...}</Text>

      <View style={{ display: "flex", flexDirection: "row"}}>
        <Button title={"Add"} onPress={addTask} />
        <Button color={"red"} title="Clear Tasks" onPress={clearTasks} />
      </View>

      {(...).map((task, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', margin: 5, padding: 10, borderWidth: 1 }}>
          <Text style={{ flex: 1 }}>{task}</Text>
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
