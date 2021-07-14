import React, { useState } from "react";
import RecipeDetails from "../components/RecipeDetails";
import { View, Text, Image, Linking, Button, Alert } from "react-native";
import { Card } from "react-native-elements";
import styles from "../stylesheet";

// this page displays the recipes and their details
// the formatting is a little off, but all information can be pulled or presented 

const RecipeSearch = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  
  return (
  <View style={styles.recipeContainer}>
   {/* <Card.Title style={{flexShrink: 1}}>{label}</Card.Title> */}
    <View>
        <View style={{ flexDirection: 'row'}}>
          <Text style={styles.title}>{label}</Text>
        </View>
          <Image 
          source={{uri: image }}
          resizeMode="cover"
          style={styles.photo}
          alt={label} 
          />  
        <View>
          <Button 
            title="Ingredients"
            color="#6b8e23"
            onPress={() => Linking.openURL(url)}>

            </Button>

            {/* <RecipeDetails 
              ingredients={ingredients}
            /> */}
        </View>
    </View>
  </View>
  );
}

export default RecipeSearch;
