import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function Header(){
    return(
        <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>MY TODO APP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:"purple",
        padding:20,
        paddingTop:60,
        alignItems:"center",        
    },
    headerText:{
        fontWeight:"bold",
        color:"white",
    }
})