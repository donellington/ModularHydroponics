import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
// import Unorderedlist from "react-native-unordered-list";
// import { ListItem, List, Card} from "react-native-elements";
import styles from "../stylesheet";

const RecipeDetails = ({ingredients}) => { 
  return ingredients.map(ingredients => {
    return (
        <View >
          <Text style={styles.container}>
          {ingredients.text}
          </Text>
          <Text>
            Item weight = {ingredients.weight}
          </Text>
        </View>
    );
  })

}

export default RecipeDetails;
