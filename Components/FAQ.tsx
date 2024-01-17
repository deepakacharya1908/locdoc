import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";


const FAQ = () => {
    return (
        <View style={styles.view}>
            <View>
            <Text style={styles.text}>Wtf is this?</Text>
            <Text style={styles.text}>Wtf is this?</Text>
            <Text style={styles.text}>Wtf is this?</Text>
            </View>
            <TextInput placeholder="Have any questions?" placeholderTextColor="gray" style={styles.textinp}></TextInput>
        </View>
    )
}

export default FAQ

const styles = StyleSheet.create({
    textinp: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        color:'black'
    },
    view: {
        flex: 1,
        justifyContent: 'space-between', // Places components with space evenly distributed
        padding: 16,

    },
    text:{
        color:'black',
        fontStyle:"italic",
        textAlign:"center"
    }

})