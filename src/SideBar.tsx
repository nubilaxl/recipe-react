
import RecipeThumb from "./RecipeThumb";
import type {MealDB} from "./Data-types";
//import meal from "./assets/recipes-mealdb.json"
//let meals = meal.meals

type SideBarProps = {
    recipes: Array<MealDB>
    selectedRecipeId: number
    deleteRecipe: (id: number) => void
    setSelectedRecipeId: (newValue: number) => void
    toggleDelete: boolean
    updateRecipeFavorite: (id: number) => void
    
}

export default function SideBar({
    recipes,
    selectedRecipeId,
    deleteRecipe,
    setSelectedRecipeId,
    toggleDelete,
    updateRecipeFavorite

}: SideBarProps
    
) {
       
        // This function is used for highlighting the selected recipe in the sidebar
        const handleRecipeClick = (id: number) => {
            setSelectedRecipeId(id)
        }

        return (<div className="sidebar  container  row col"    >SideBar
            {...recipes.map(r => (<RecipeThumb 
                        key={r.id} 
                        recipe = {r} 
                        onSelected = {handleRecipeClick}
                        isSelected ={r.id === selectedRecipeId}
                        deleteRecipe={deleteRecipe}
                        toggleDelete={toggleDelete}
                        updateRecipeFavorite = {updateRecipeFavorite}
                        
                        />
                
            )

            )
            
            }
        </div>
        )


}