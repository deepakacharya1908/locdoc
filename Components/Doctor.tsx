import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import firestore from '@react-native-firebase/firestore';
import RightDetailCard from "../Components/Card"; // Assuming you have the card component from previous examples
import { SearchBar } from "react-native-elements";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const doctorsCollection = firestore().collection('doctors');

      try {
        const querySnapshot = await doctorsCollection.get();

        if (!querySnapshot.empty) {
          const doctorsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDoctors(doctorsData);
        } else {
          console.log("No documents found in the 'doctors' collection");
        }
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  const renderDoctorCard = ({ item }) => (
    <RightDetailCard
      NAME={item.NAME} // Adjust accordingly based on your document structure
      HOSPITAL={item.HOSPITAL}
      SPECIALIAZATION={item.SPECIALIAZATION}
    />
  );
  const handleSearch = (text) => {
    const fetchData = async () => {
      const doctorsCollection = firestore().collection('doctors');

      try {
        const querySnapshot = await doctorsCollection.get();

        if (!querySnapshot.empty) {
          const doctorsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDoctors(doctorsData);
        } else {
          console.log("No documents found in the 'doctors' collection");
        }
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
    setSearch(text);
  
    // If the search text is empty, display all hospitals
    if (text.trim() === '') {
      // Reset the list to display all hospitals
      fetchData();
    } else {
      // Otherwise, filter hospitals based on the name
      const filteredDoctors = doctors.filter((doctor) =>
      doctor.NAME.toLowerCase().includes(text.toLowerCase())
      );
      setDoctors(filteredDoctors);
    }
  };
  
  const handleClearSearch = () => {
    setSearch('');
    // Reset the list to display all doctors
    const fetchData = async () => {
        const doctorsCollection = firestore().collection('doctors');

        try {
          const querySnapshot = await doctorsCollection.get();
  
          if (!querySnapshot.empty) {
            const doctorsData = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setDoctors(doctorsData);
          } else {
            console.log("No documents found in the 'doctors' collection");
          }
        } catch (error) {
          console.error("Error fetching doctors data:", error);
        }finally {
            setLoading(false); // Set loading to false regardless of success or error
          }
      };

    fetchData();
  };

  return (
    <View style={styles.container}>
        <SearchBar
        placeholder="Search for a doctor..."
        onChangeText={handleSearch}
        onClear={handleClearSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        placeholderTextColor="#888"
        clearIcon={{ color: "#888", name: "close" }}
      />{loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      ) :doctors.length > 0 ? (
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          renderItem={renderDoctorCard}
        />
      ) : (
        <Text>No doctors found</Text>
      )}
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff', // Set the background color if needed
      },
      searchBarContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
      },
      inputContainer: {
        backgroundColor: '#eee',
        borderRadius: 10,
      },
      inputText: {
        color: '#333',
      },
      loadingIndicator: {
        marginTop: 20,
      },
});
