import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import firestore from '@react-native-firebase/firestore';
import RightDetailCard from "../Components/CardsHospital"; // Assuming you have the card component from previous examples
import { SearchBar } from "react-native-elements";

const Hospital = () => {
  const [hospitals, sethospitals] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const hospitalsCollection = firestore().collection('hospital');

      try {
        const querySnapshot = await hospitalsCollection.get();

        if (!querySnapshot.empty) {
          const hospitalsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          sethospitals(hospitalsData);
        } else {
          console.log("No documents found in the 'doctors' collection");
        }
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  const renderHospCard = ({ item }) => (
    <RightDetailCard
      NAME={item.NAME} // Adjust accordingly based on your document structure
      ADDRESS={item.ADDRESS}
    />
  );
  const handleSearch = (text) => {
    const fetchData = async () => {
      const hospitalsCollection = firestore().collection('hospital');

      try {
        const querySnapshot = await hospitalsCollection.get();

        if (!querySnapshot.empty) {
          const hospitalsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          sethospitals(hospitalsData);
        } else {
          console.log("No documents found in the 'doctors' collection");
        }
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      } finally {
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
      const filteredHospitals = hospitals.filter((hospital) =>
        hospital.NAME.toLowerCase().includes(text.toLowerCase())
      );
      sethospitals(filteredHospitals);
    }
  };
  
  const handleClearSearch = () => {
    setSearch('');
    // Reset the list to display all doctors
    const fetchData = async () => {
      const hospitalsCollection = firestore().collection('hospital');

      try {
        const querySnapshot = await hospitalsCollection.get();

        if (!querySnapshot.empty) {
          const hospitalsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          sethospitals(hospitalsData);
        } else {
          console.log("No documents found in the 'doctors' collection");
        }
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
      finally {
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
      ) : hospitals.length > 0 ? (
        <FlatList
          data={hospitals}
          keyExtractor={(item) => item.id}
          renderItem={renderHospCard}
        />
      ) : (
        <Text>No doctors found</Text>
      )}
    </View>
  );
};

export default Hospital;

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
