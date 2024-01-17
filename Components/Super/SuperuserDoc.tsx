import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


const SuperuserDoc = () => {

    const add_doctor=()=>{

    }
    const delete_doctor=()=>{
        
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.heading}>Edit the list of Doctors! </Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.Button} onPress={add_doctor}>
                    <Text>ADD DOCTOR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={delete_doctor}>
                    <Text>DELETE DOCTOR</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default SuperuserDoc

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