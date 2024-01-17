import { StyleSheet,Text,View } from "react-native";
import React from "react";


const Profile=()=>{
    return(
        <View>
            <Text style={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis nemo sapiente consequuntur porro temporibus eius ut sequi maxime, tempore quas, aperiam eos accusantium eligendi harum assumenda laborum quaerat recusandae magnam? In quae maxime accusantium quo numquam ad, accusamus nulla dolor amet quod. Reiciendis magni provident minima consequatur ex ipsum nemo quos, voluptatum itaque inventore dignissimos deserunt aut eos qui odit, hic eum magnam quo velit aliquam numquam, a soluta! Culpa ullam exercitationem inventore facilis dolores laudantium odio quos totam, tempora pariatur voluptatibus itaque nobis minima veritatis non numquam necessitatibus eius quibusdam amet at! Deserunt aut expedita perferendis officia veritatis!</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    text:{
        color: 'black',
        fontSize:20,
        textAlign:"justify",
        padding:20
    }

})