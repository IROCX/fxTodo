import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Toast from "react-native-simple-toast";

const TodoInputItem = ({addTodo}) => {

    const [todo, setTodo] = useState()

    useEffect(() => {
        console.log(todo)
    }, [todo])

    const addTodoHandler = () => {
        if (todo && todo.length !== 0) {
            addTodo(todo)
            setTodo("")
        }else{
            Toast.show('Press enter a todo text.');
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setTodo}
                multiline
                style={styles.textInput}
                placeholder={"Add a todo..."}
                value={todo}
            />
            <TouchableOpacity onPress={addTodoHandler} activeOpacity={0.75}>
                <AntDesign name="checkcircle" size={32} color="#5e8b7e"/>
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 1
    },
    textInput: {
        flex: 1,
        marginRight: 20,
        borderBottomWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: "#5e8b7e",
        maxHeight: 200,
        fontSize: 16,
        color: "#333",
        letterSpacing: 0.7

    }
})

export default TodoInputItem