import React from "react";
import { TextInput,  View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Form({addToDo}){

    const [newTodo, setNewTODO] = React.useState("")

    return(
         <View style = {styles.container}>
                <TextInput
                style = {styles.input}
                onChangeText={e =>setNewTODO(e)}
                />
                <TouchableOpacity
                style = {styles.btn}
                onPress={()=>{addToDo(newTodo)}}
                >
                    <Text style = {styles.textComponent}>Add todo</Text>
                </TouchableOpacity>
        </View>
      
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        paddingVertical:5,
        marginTop:8,
    },
    container:{
        padding:20,
        justifyContent:"center",
    },
    btn:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"purple",
        marginTop: 8,
        padding: 10,
        fontWeight:"bold",   
        borderRadius: 10,   
    },
    textComponent:{
        fontWeight: "bold",
        color:"white",
    }
})