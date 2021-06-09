import React, {useEffect, useState} from 'react';
import {BackHandler, FlatList, ImageBackground, StyleSheet, View} from 'react-native';

import TodoItem from "../components/TodoItem";
import TodoInputItem from "../components/TodoInputItem";
import {connect} from "react-redux";
import Toast from 'react-native-simple-toast';
import bg from './../assets/bg.jpeg'

const HomeScreen = ({todos, addTodoS, removeTodoS}) => {

    const [exitFlag, setExitFlag] = useState(0)

    const ANIMATION_DURATION = 250;

    const removeTodo = (id) => {
        console.log("remove todo")
        removeTodoS(id)

    }
    const addTodo = (todo) => {
        console.log("add todo")
        addTodoS(todo)
    }

    const backAction = () => {
        if (exitFlag) {
            BackHandler.exitApp()
            return true
        } else {
            setExitFlag(1)
            Toast.show('Press again to exit app.');
            return true
        }
    };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );



    useEffect(() => {

    }, [todos])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={bg}
                style={{width: "100%", height: "100%", position:"absolute", opacity:0.5}}
            />
            <TodoInputItem addTodo={addTodo}/>
            <FlatList
                style={styles.listContainer}
                data={todos}
                renderItem={({item}) => <TodoItem removeTodo={removeTodo} todo={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#dfeeea"
    },
    listContainer: {
        marginTop: 20,
        width: "90%",
        maxHeight: "70%"
    }
})

const matchStateToProps = (state) => {
    // console.log(state)
    const {todos} = state
    return {
        todos: todos
    }
}
const matchPropsToState = (dispatch) => {
    return {
        addTodoS: (todo) => {
            dispatch({type: "ADD TODO", todo: todo})
        },
        removeTodoS: (id) => {
            dispatch({type: "REMOVE TODO", id: id})
        }
    }
}

export default connect(matchStateToProps, matchPropsToState)(HomeScreen)