import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


const QR = ({ route }) => {
    const { scannedData } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scanned Data:</Text>
            <Text style={styles.data}>{scannedData}</Text>
            <TouchableOpacity style={styles.button}><Text>Add to favorites!!</Text></TouchableOpacity>
        </View>
    )
}

export default QR

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: 'black',
        fontSize: 20,
        textAlign: "justify",
        padding: 20,
        fontWeight: "bold"
    },
    data: {
        borderWidth: 2,
        borderColor: 'black', margin: 20, color: 'grey', padding:20, textAlign:"center"
    },
    button:{
        margin:20,
        backgroundColor:'red',
        alignContent:"center",
        textAlign:"center",
        justifyContent:"center"
    }

})