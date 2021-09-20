import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes } = props;
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
      {recipes.map(recipe => (
        <RecipeItem
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))
      }
    </div>
  );
};

export default Recipes;