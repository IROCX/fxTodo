import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const TodoItem = ({todo, removeTodo}) => {

    const deleteHandler = () => {
        removeTodo(todo.id)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.content}>
                {todo.content}
            </Text>
            <TouchableOpacity onPress={deleteHandler} activeOpacity={0.75}>
                <MaterialIcons name="delete" size={24} color="#f55c47"/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderStyle: 'dashed',
        borderColor: "#5e8b7e",
        backgroundColor:"#aacdbe",
        elevation: 2,
        // shadowColor:"#000",
        // shadowOffset:{
        //     width:0,
        //     height:20
        // },
        // shadowOpacity:1,
        // shadowRadius:20
    },
    content: {
        flex: 1,
        marginRight: 7,
        lineHeight: 20,
        letterSpacing: 0.7
    }
})

export default TodoItem