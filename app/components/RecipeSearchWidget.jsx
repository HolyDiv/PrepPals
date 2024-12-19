import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const RecipeSearchWidget = ({recipeName, recipeURI, recipeId}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: recipeURI}}/>
      <Text>{recipeName}</Text>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'green',
        }, 
        image: {
          width: 100,
          height: 100,
          borderRadius: 15
        },
    }
)

export default RecipeSearchWidget