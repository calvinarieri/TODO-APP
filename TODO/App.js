import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from './components/Header';
import React from 'react';
import TODOList from './components/TODOList';
import Form from './components/Form';

export default function App() {
  const [todos, setTodos] = React.useState([
    { key: 1, todo: "greet friends" },
    { key: 2, todo: "Walk away" },
    { key: 3, todo: "Walk towards" },
  ]);

  function addToDo(value) {
    if (value.length > 10) {
      setTodos([...todos, { key: Math.random(), todo: value }]);
    } else {
      Alert.alert("Short to-do description", "Do not submit a to-do with less than ten characters");
    }
  }

  function removeTodo(id){
    setTodos(todos.filter(todo =>{

      if(todo.key != id){
        return todo
      }
    }))
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <Header />

        <View style={styles.content}>
          {/* Form */}
          <Form addToDo={addToDo} />

          {/* List */}
          <View style={styles.list}>
            <TODOList todoData={todos} removeTodo = {removeTodo}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,  // Ensure the TODOList takes up remaining space and is scrollable
    marginTop: 20,
  },
});
