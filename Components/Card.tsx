import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RightDetailCard = ({ NAME,HOSPITAL,SPECIALIAZATION  }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/icons/doctor.gif')} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>NAME: Dr.{NAME}</Text>
        <Text style={styles.description}>Hospital name: {HOSPITAL}</Text>
        <Text style={styles.description}>Specialization: {SPECIALIAZATION}</Text>

      </View>
    </View>
  );
};

export default RightDetailCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
    color:'black',
    textAlign:"justify"
  },
  description: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#555",
  },
});
