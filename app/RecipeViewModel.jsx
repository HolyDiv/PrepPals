import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingWheel from './components/loadingWheel';

const RecipeViewModel = ({recipeID}) => {
    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`

    const fetchRecipebyId = async () => {
        try {
            const response = await axios.get(url)

            if(response.data.meals){
                setRecipe(response.data.meals[0])
            } else {
                setError(`No recipes found for: ${recipeID}`)
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRecipebyId()
    }, [recipeID])

    if (loading) {return <LoadingWheel />}
    
    if (error) {
        return (
            <View> 
                <Text>
                    Error: {error}
                </Text>
            </View>
        );
    }

    return (
        <View>
            <Text>{recipe.strInstructions}</Text>
        </View>
    )
}

export default RecipeViewModel