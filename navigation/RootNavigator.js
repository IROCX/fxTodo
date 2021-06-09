import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome5 } from '@expo/vector-icons';

const RootNavigator = () => {

    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Splash'}
                    component={SplashScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={'Home'}
                    component={HomeScreen}
                    options={{
                        title: 'Your Todos',
                        headerStyle: {
                            backgroundColor: '#5e8b7e',
                        },
                        headerTintColor: '#fff',
                        headerLeftContainerStyle:{
                            width:75,
                            alignItems:"center",
                            marginRight:0
                        },
                        headerLeft:()=><FontAwesome5 name="tasks" size={24} color="#fff" />
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
};

const styles = StyleSheet.create({
    container: {

    }
})

export default RootNavigator