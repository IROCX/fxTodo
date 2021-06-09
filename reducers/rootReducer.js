import {nanoid} from 'nanoid/non-secure'
import AsyncStorage from "@react-native-async-storage/async-storage";

const initState = {
    todos: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === "ADD TODO") {
        console.log("ADDING TODO")
        const newState = {
            ...state,
            todos: [
                {
                    id: nanoid(),
                    content: action.todo
                },
                ...state.todos

            ]
        }
        console.log("ADDING TODOccc")
        state = newState
        try {
            const jsonValue = JSON.stringify(newState)
            AsyncStorage.setItem('todoState', jsonValue).then((res) => {
                console.log("DATA SAVED SUCCESFULLY***")
            })
        } catch (e) {
            console.log(e)
        }
    }

    if (action.type === "REMOVE TODO") {
        console.log("REMOVING TODO")
        const newState = {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.id)
        }
        state = newState
        try {
            const jsonValue = JSON.stringify(newState)
            AsyncStorage.setItem('todoState', jsonValue).then((res) => {
                console.log("DATA SAVED SUCCESFULLY***")
            })
        } catch (e) {
            console.log(e)
        }
    }
    if (action.type === "SET DATA") {
        state = action.data
    }

    return state
}

export default rootReducer