import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Whereto = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    function getdata() {
        navigation.navigate('Doctor')
    }
    function gethospitals(){
        navigation.navigate('Hospitals')
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.heading}>What are you looking for?</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.Button} onPress={getdata}>
                    <Text>DOCTOR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={gethospitals}>
                    <Text>HOSPITAL</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Whereto

const styles = StyleSheet.create({
    Button: {
        flexDirection: 'row',
        backgroundColor: '#4285F4',  // Set your desired background color
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        margin: 10,
        marginTop: '40%',
        marginBottom: '50%',
        flex: 1

    },
    container: {
        flex: 1,
        flexDirection: "row"
    },
    heading: {
        color: "black",
        textAlign: "center",
        alignItems: "center",
        marginTop: '25%',
        fontSize: 30
    }

})