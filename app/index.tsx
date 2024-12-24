import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import RecipeController from "./RecipeController";

// TODO: make it functional with dynamic queries, most likely have to delay api call 300ms or something after user hits enter
// - otherwise can use a button to serve as a middle man 

const Index = () => {
  const [query, setQuery] = useState('')
  return (
    <View>
      <TextInput placeholder="search" onChangeText={setQuery} value={query}/>
      <ScrollView>
        <RecipeController searchQuery={"beef"} />
      </ScrollView>
    </View>
  );
}


export default Index

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
  }
})
