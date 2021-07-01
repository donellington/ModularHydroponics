import React, { useState } from "react";
import RecipeDetails from "../components/RecipeDetails";
import { View, Text, Image, Linking, Button, Alert } from "react-native";
import { Card } from "react-native-elements";

// this page displays the recipes and their details
// the formatting is a little off, but all information can be pulled or presented 

const RecipeSearch = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  
  return (
  <Card style={{flexShrink: 1}}>
   <Card.Title>{label}</Card.Title>
    <View >
          <Image 
          source={{uri: image }}
          resizeMode="cover"
          style={{width: 200, height: 200 }}
          alt={label} 
          />  
          <Text
              onPress={() => Linking.openURL(url)}>
              URL
          </Text>
        <View>
          <Button 
            title="Ingredients"
            color="#6b8e23"
          />  
            <RecipeDetails 
              ingredients={ingredients}
            />
        </View>
    </View>
  </Card>
  );
}

export default RecipeSearch;
