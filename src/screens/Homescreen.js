import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from './reduxToolkit/CartSlice';

const HomeScreen = ({ navigation }) => {

    const items = [
        {
            id: 1,
            name: 'Synthetic Leather |Lightweight|Comfort|Summer|',
            brand: 'PUMA',
            price: 10.99,
            image: 'https://rukminim2.flixcart.com/image/832/832/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
            qty: 10
        },
        {
            id: 2,
            name: 'MAX Sports shoes, Running, Walking, Lightweight, Gym',
            brand: 'NIKE',
            price: 15.99,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/4/p/4/-original-imagpzm9apyqghyx.jpeg?q=70',
            qty: 12
        },
        {
            id: 3,
            name: 'VENTADOR CLIMACOOL Running Shoes For Men  (Blue)',
            brand: 'Adidas',
            price: 18.55,
            image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/w/l/-original-imagngfvf98j2gpk.jpeg?q=70',
            qty: 15
        },
        {
            id: 4,
            name: 'SM-678 Running Shoes For Men  (Blue, Green)',
            brand: 'Sparx',
            price: 10.15,
            image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/w/w/-original-imagrnddgwysrka2.jpeg?q=70',
            qty: 25
        },
    ];


    const dispatch = useDispatch()
    const addedItems = useSelector(state => state.cart)
    console.log("addedItems", addedItems)
    const addItem = (item) => {
        dispatch(addCartItem(item))
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, justifyContent: "space-between", alignItems: "center", backgroundColor: "white", flexDirection: "row" }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5, marginHorizontal: 30 }}>
                    <Text style={[styles.textFont, { fontSize: 14, textTransform: "capitalize", fontWeight: "bold", marginLeft: 0 }]}>HomeScreen</Text>

                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5, marginHorizontal: 30, backgroundColor: "#b8d8a0", borderRadius: 30 }}>
                    <Text style={{ color: '#000', textAlign: "center", fontSize: 14, padding: 5, paddingHorizontal: 30, fontWeight: "bold" }}>{addedItems.length}</Text>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <View style={{ marginTop: 10, marginHorizontal: 15 }}>
                    {
                        items.map((item) => (
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
                                        {/* {item.qty == 0 ? */}
                                        <TouchableOpacity onPress={() => { addItem(item) }} style={[styles.loginButton, { paddingHorizontal: 10, paddingVertical: 5 }]}>
                                            <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>Add to Cart</Text>
                                        </TouchableOpacity>
                                        {/* // : null} */}
                                        {/* {item.qty == 0 ? null :
                                            <TouchableOpacity style={styles.loginButton}>
                                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>-</Text>
                                            </TouchableOpacity>
                                        }
                                        {item.qty == 0 ? null :
                                            <Text style={[styles.textFont, { fontSize: 12, fontWeight: "bold", marginHorizontal: 10 }]}>1</Text>
                                        }
                                        {item.qty == 0 ? null :
                                            <TouchableOpacity style={styles.loginButton}>
                                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>+</Text>
                                            </TouchableOpacity>
                                        } */}
                                    </View>
                                </View>

                            </View>
                        ))}
                </View>
            </ScrollView>
            <View style={{ height: 70, justifyContent: "space-between", alignItems: "center", backgroundColor: "white", flexDirection: "row" }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5, marginHorizontal: 30 }}>
                    <Text style={[styles.textFont, { fontSize: 14, textTransform: "capitalize", fontWeight: "bold", marginLeft: 0 }]}>items added (1)</Text>
                    <Text style={[styles.textFont, { fontSize: 14, fontWeight: "normal", marginLeft: 0 }]}>$ 49.16</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5, marginHorizontal: 30 }}>
                    <TouchableOpacity style={[styles.loginButton, { paddingHorizontal: 20, paddingVertical: 7 }]} onPress={() => navigation.navigate("CartScreen")}>
                        <Text style={{ color: 'white', textAlign: "center", fontSize: 14 }}>View Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default HomeScreen

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