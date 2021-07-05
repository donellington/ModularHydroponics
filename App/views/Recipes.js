import React, { useState } from "react";
import styles from "../stylesheet";
import axios from 'axios';
import RecipeSearch from "../components/RecipeSearch";
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";

function Recipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  //constants should be fine
  const APP_ID = "5df6fc99";
  const APP_KEY = "6fc1381e29d31f79662a705e2ceda993";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // getData should be fine
  const getData = async () => {
    // if (query !== "") {
      const result = await axios.get(url);
    //   if (!result.data.more) {
    //     return setAlert("No food with such name");
    //   }
      console.log(result);

      setRecipes(result.data.hits);
      setQuery("");
    //   setAlert("");
    // } else {
    //   setAlert("Please fill the form");
    // }
  };


  const onChange = text => setQuery(text); //correct

  const onSubmit = text => {
    text.preventDefault();
    getData();
  };

  return (
    
    <ScrollView> 
      <Text> Recipe Searching </Text> 
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputStyle}
            placeholder="Search Recipes"
            onChangeText={onChange}
            value={query}
            autoComplete="off"
          />
        </View>
        <Button 
        title="Search"
        onPress={onSubmit} 
        value="search"
        color="#6b8e23"
        />
        <View>   
          <Text>
            {recipes !== [] && recipes.map(recipe => <RecipeSearch recipe= {recipe}/>)}
          </Text>
        </View>
        
  </ScrollView>
  );
}

export default Recipes;