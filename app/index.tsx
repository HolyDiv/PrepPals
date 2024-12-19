
import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import RecipeController from "./RecipeController";

// TODO: make it functional with dynamic queries, most likely have to delay api call 300ms or something after user hits enter
// - otherwise can use a button to serve as a middle man 

const Index = () => {
  const [query, setQuery] = useState('')

import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native";
import { Link } from 'expo-router';


  return (

    <View>
      <TextInput style={styles.input} placeholder="search" onChangeText={setQuery} value={query}/>
      <ScrollView>
        <RecipeController searchQuery={"beef"} />
      </ScrollView>

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello</Text>
      <Link href ="/DummyScreen" style={{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>DummyScreen</Text>
        </Pressable>
      </Link>

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
