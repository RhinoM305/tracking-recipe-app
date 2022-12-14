import React from "react";
import MapList from "./MapList"
function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <React.Fragment>
      <table className="recipe-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
           </tr>
        </thead>
        <tbody>
          <MapList recipes={recipes} deleteRecipe={deleteRecipe}/>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default RecipeList;
