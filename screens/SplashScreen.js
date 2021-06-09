import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {connect} from "react-redux";

const SplashScreen = ({getData}) => {

    const navigation = useNavigation()

    setTimeout(()=>{
        navigation.navigate("Home")
    }, 1500)

    useEffect(() => {
        getData()
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.brandText}>
                fxTodo
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5e8b7e",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        color:"#fff"
    },
    brandText:{
        color:"#fff",
        fontSize:50,
        fontWeight:"bold"
    }
})

const matchPropsToState = (dispatch) => {
    return {
        getData: () => {
            dispatch({type: "GET DATA"})
        }
    }
}

export default connect(null, matchPropsToState)(SplashScreen)