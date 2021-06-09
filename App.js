import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from "./navigation/RootNavigator";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers/rootReducer'
import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncGetTodosMiddleWare = ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (action.type === 'GET DATA') {
                try {
                    AsyncStorage.getItem('todoState').then(jsonValue => {
                        // console.log("*************************1", jsonValue)
                        let newState = jsonValue != null ? JSON.parse(jsonValue) : {todos: []};
                        // console.log("*************************2", newState)
                        dispatch({type: "SET DATA", data: newState})
                    })
                } catch (e) {
                    console.log(e)
                }
            }
            return next(action)
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(asyncGetTodosMiddleWare))

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <RootNavigator/>
                <StatusBar/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// splash": {
//"image": "./assets/splash.png",
//"resizeMode": "contain",
//"backgroundColor": "#ffffff"
//},
