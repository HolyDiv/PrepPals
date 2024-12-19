import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default async function RecipeController (searchQuery) {
    useEffect(() => {
        const data = async () => {
            if(typeof searchQuery === "string") {const searchQuery = searchQuery}

            const url = "www.themealdb.com/api/json/v1/1/filter.php?i=" + searchQuery;

            try {
                const response = await fetch(url);

                if(!response.meals) {
                    throw new Error('ERROR: Unable to fetch from URL: ${url}');
                }

                const recipe = await response.json();
                console.log(recipe);
            } catch(error) {
                console.error(error);
            }
        }
    });

    return(
        0
    );
}