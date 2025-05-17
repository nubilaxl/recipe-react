


import type { MealDB} from "./Data-types";

type RecipeThumbProps = {
    recipe: MealDB
    onSelected: (id: number) => void
    deleteRecipe: (id: number) => void
    isSelected: boolean
    toggleDelete: boolean
    updateRecipeFavorite: (id: number) => void
    
}


export default function RecipeThumb({recipe, onSelected, deleteRecipe,isSelected, toggleDelete,  updateRecipeFavorite}: RecipeThumbProps) {
    // The updateRecipeFavorite function toggles the favorite boolean data value, then recipe.favorites value determines the icon to display
    // The onselected function places a blue indicator border around the selected thumbnail image in the sidebar.
    // The toggleDelete prop is used to hide/show the X button, the deleteRecipe function deletes the recipe.
    return (
        <figure>
     <figcaption >{recipe.strMeal} 
     </figcaption> 
        <button type="button" className="favorite" onClick={() => updateRecipeFavorite(recipe.id)}> {recipe.favorite ? '🩷' : '🩶'}</button>
        
        
        <img src= {(recipe.idMeal === "New") ? recipe.strMealThumb : recipe.strMealThumb + "/small"}  alt="photo" onClick={() =>
                                onSelected(recipe.id)
        }
        className={`border border-2 rounded-4 ${isSelected ? "border-primary" : "border-light"}`}
        />
        {toggleDelete && <button type="button" className="delete-button btn btn-outline-secondary me-2"
            onClick={() => deleteRecipe(recipe.id)}>X </button>}
        </figure>
    
      
   )
}

