import 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import HomeScreen from '../screens/Homescreen';
import CartScreen from '../screens/CartScreen';
import { useDispatch } from 'react-redux';
import { addMyProducts } from '../screens/reduxToolkit/MyProductSlice';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {

    const items = [
        {
            id: 1,
            name: 'Synthetic Leather |Lightweight|Comfort|Summer|',
            brand: 'PUMA',
            price: 10.99,
            image: 'https://rukminim2.flixcart.com/image/832/832/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
            qty: 0
        },
        {
            id: 2,
            name: 'MAX Sports shoes, Running, Walking, Lightweight, Gym',
            brand: 'NIKE',
            price: 15.99,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/4/p/4/-original-imagpzm9apyqghyx.jpeg?q=70',
            qty: 0
        },
        {
            id: 3,
            name: 'VENTADOR CLIMACOOL Running Shoes For Men  (Blue)',
            brand: 'Adidas',
            price: 18.55,
            image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/w/l/-original-imagngfvf98j2gpk.jpeg?q=70',
            qty: 0
        },
        {
            id: 4,
            name: 'SM-678 Running Shoes For Men  (Blue, Green)',
            brand: 'Sparx',
            price: 10.15,
            image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/w/w/-original-imagrnddgwysrka2.jpeg?q=70',
            qty: 0
        },
    ];

    const dispatch = useDispatch();
    useEffect(() => {
        items.map(item => {
            dispatch(addMyProducts(item))
        })
    }, [])

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