import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingWheel from './components/loadingWheel';
import { View, Text } from 'react-native';
import RecipeSearchWidget from './components/RecipeSearchWidget';


const RecipeController  = ({searchQuery}) => {
    const [recipes, setRecipes] = useState([]) // initialized to empty array to hold recipes, setRecipes will update and add to recipes
    const [loading, setLoading] = useState(true) // initialized to true since at start it will be loading, on compleation of API call, it will be toggled
    const [error, setError] = useState(null) // state to monitor error of api call

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(url)
            
            if (response.data.meals) {
                setRecipes(response.data.meals)
            } else {
                setError(`No recipes found for: ${searchQuery}`)
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false) // Api call has finished and thus loading is set to false
        }
    }

    useEffect(() => {
        fetchRecipes()
    }, [searchQuery])

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

    return(
        <View>
            {
                recipes.map((recipe) => (
                    <View key={recipe.idMeal}> 
                       <RecipeSearchWidget recipeName={recipe.strMeal} recipeURI={recipe.strMealThumb} recipeId={recipe.idMeal} />
                    </View>
                ))
            }
        </View>
    );
}

export default RecipeController