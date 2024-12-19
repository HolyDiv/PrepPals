import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import RecipeController from "./RecipeController";

// TODO: make it functional with dynamic queries, most likely have to delay api call 300ms or something after user hits enter
// - otherwise can use a button to serve as a middle man 

const Index = () => {
  const [query, setQuery] = useState('')

  return (
    <View>
      <TextInput style={styles.input} placeholder="search" onChangeText={setQuery} value={query}/>
      <ScrollView>
        <RecipeController searchQuery={"beef"} />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create(
 {
  input: {
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  }
 }
);


export default Index