/**
 * Challenge: Recipe Card
 * 
 * 
 * Step 1: Customize the recipe
 * Change the title and ingredients to one of your favorite recipes... though you may want to simplify it a bit!
 * 
 * 
 * Step 2: Make it an object
 * Did you notice that the title, servings and ingredients look like properties of a recipe?
 * You'll make an object to store all of those properties.
 * 
  - Start off by making a new variable that's an empty object (without any properties);
  - Inside your object, add a property for the title. Don't forget the comma at the end;
  - Repeat last step for the servings and ingredients properties;
 * 
 * Tip: Making objects is a bit tricky at first.
 * And don't forget "quotation marks" around your strings.
 * 
 * 
 * Step 3: Use the object
 * To finish the challenge, change the three text commands to display the values of the properties of your recipe object.
 * 
 * Remember: to get the value of a property, use the object.property notation.
 */

var recipeTitle = "Bread";
var recipeServings = 2;
var recipeIngredients = ["Flour", "Water"];

var recipe = {
  title: "Sinigang",
  servings: 7,
  ingredients: ["Vinegar", "Pork", "Vegetables"]
};

fill(26, 26, 26);
textSize(20);
text(recipe.title, 10, 23);
text("Serves: " + recipe.servings, 10, 55);
text("Ingredients: " + recipe.ingredients, 10, 85);