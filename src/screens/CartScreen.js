import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, removeCartItem, subtrProductToMyCart } from './reduxToolkit/CartSlice';
import { decreaseQty, increaseQty } from './reduxToolkit/MyProductSlice';


const CartScreen = ({ navigation }) => {

    const myCartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, justifyContent: "space-between", alignItems: "center", backgroundColor: "white", flexDirection: "row" }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5, marginHorizontal: 30 }}>
                    <Text style={[styles.textFont, { fontSize: 14, textTransform: "capitalize", fontWeight: "bold", marginLeft: 0 }]}>Cart</Text>

                </View>

            </View>
            <ScrollView style={styles.container}>
                <View style={{ marginTop: 10, marginHorizontal: 15 }}>
                    {
                        myCartItems.map((item) => (
                            <View style={styles.listItem} key={item.id}>

                                <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 8 }}>
                                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>

                                        <Image source={{ uri: item.image }} style={{ height: 67, width: 62, borderRadius: 6 }} resizeMode='contain' />

                                    </TouchableOpacity>
                                    <View style={{ flex: 3.2, justifyContent: "center", alignItems: "flex-start", marginLeft: 5 }}>
                                        <Text style={[styles.textFont, { lineHeight: 15, fontSize: 12, textTransform: "capitalize" }]}>{item.name}</Text>
                                        <Text style={[styles.textFont, { fontSize: 10, color: "grey", lineHeight: 14, textTransform: "capitalize" }]} numberOfLines={2}>{item.brand}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 5 }}>

                                            <Text style={[styles.textFont, { fontSize: 12, marginLeft: 10, fontWeight: "bold" }]}>${item.price}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        {/* {item.qty == 0 ?
                                            <TouchableOpacity style={[styles.loginButton, { paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "red", borderColor: "red" }]}>
                                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12, fontWeight: "bold" }}>Remove</Text>
                                            </TouchableOpacity>
                                            : null} */}
                                        {item.qty == 0 ? null :
                                            <TouchableOpacity onPress={() => {
                                                if (item.qty > 1) {
                                                    dispatch(subtrProductToMyCart(item))
                                                    dispatch(decreaseQty(item.id))
                                                } else {
                                                    dispatch(removeCartItem(item.id))
                                                    dispatch(decreaseQty(item.id))
                                                }
                                            }}
                                                style={styles.loginButton}>
                                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>-</Text>
                                            </TouchableOpacity>
                                        }
                                        {item.qty == 0 ? null :
                                            <Text style={[styles.textFont, { fontSize: 12, fontWeight: "bold", marginHorizontal: 10 }]}>{item.qty}</Text>
                                        }
                                        {item.qty == 0 ? null :
                                            <TouchableOpacity onPress={() => { dispatch(addProductToMyCart(item)), dispatch(increaseQty(item.id)) }} style={styles.loginButton}>
                                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>+</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>

                            </View>
                        ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        color: "black",
        borderColor: "#E3E2E2",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginTop: 15
    },
    textStyleBold: {
        color: "black", marginLeft: 10, fontSize: 13, lineHeight: 30,
    },
    listItem: {
        height: 90,
        width: Dimensions.get('window').width - 30,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        marginVertical: 5,
    },
    shadowCard: {
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    textFont: {
        fontSize: 12,
        color: "#000",
        marginLeft: 10,
    },
    loginButton: {
        borderWidth: 1,
        borderRadius: 6,
        color: "black",
        borderColor: "green",
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: "green"
    },

})