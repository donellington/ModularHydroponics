import { StyleSheet, Dimensions } from "react-native";

const { width1: viewportWidth } = Dimensions.get('window');
const { width2, height } = Dimensions.get('window');
const SCREEN_WIDTH = width2 < height ? width2 : height;


const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;
const recipeNumColums = 2;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5
  },
    photoIngredient: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
   container: {
    backgroundColor: 'white',
    flex: 1
  },
  recipeContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#adff2f',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    marginRight: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    // borderWidth: 1.5,
    // borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    flexWrap:'wrap',
    flexShrink: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  infoRecipeContainer: {
    flex: 1,
    // margin: 23,
    marginTop: 20,
        // marginRight: 5,
    marginLeft: 25,
    // padding:10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
    image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },
  plusButton: {
    fontSize: 28,
    fontWeight: "400",
  },
});

export default styles;
