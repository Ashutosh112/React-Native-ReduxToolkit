import 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import HomeScreen from '../screens/Homescreen';
import CartScreen from '../screens/CartScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator >

                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerTitleStyle: { fontSize: 16 },
                    headerShown: false, title: "Home Screen"
                }} />

                <Stack.Screen name="CartScreen" component={CartScreen} options={{
                    headerTitleStyle: { fontSize: 16 },
                    headerShown: false, title: "Cart"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({
    loginButton: {
        borderWidth: 1,
        borderRadius: 6,
        color: "black",
        borderColor: "#595970",
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 7,
        paddingVertical: 5,
        backgroundColor: "#595970",
    },
})