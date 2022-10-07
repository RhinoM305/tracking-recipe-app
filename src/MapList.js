import React from "react"
import RecipeView from "./RecipeView"
function MapList ({ recipes,deleteRecipe }){ 

return recipes.map((recipe,index) => (
              <RecipeView 
                deleteRecipe={() => deleteRecipe(index)}
                key={index}
                recipe={recipe}
                />
           ))}

export default MapList