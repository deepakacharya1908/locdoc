import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BottomTabNavigator from "../BottomNav";


const SuperuserHosp = () => {

    const add_hospital=()=>{

    }
    const delete_hospital=()=>{
        
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.heading}>Edit the list of Hospital! </Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.Button} onPress={add_hospital}>
                    <Text>ADD HOSPITAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={delete_hospital}>
                    <Text>DELETE HOSPITAL</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default SuperuserHosp

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