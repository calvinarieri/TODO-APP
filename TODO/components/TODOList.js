import { FlatList, View, Text, StyleSheet } from "react-native";

export default function TODOList({ todoData , removeTodo}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={todoData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text onPress={()=>removeTodo(item.key)}>{item.todo}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Make the container take full space of the screen
    padding: 20,
  },
  card: {
    borderWidth: 1,
    padding: 20,
    marginVertical: 4,  // Use marginVertical to space cards vertically
    borderRadius: 10,
  },
});
