
import type {MealDB} from "./Data-types";

type RecipeViewProps = {
    selectedRecipe?: MealDB
    
}

// This function is the JSX to show the Recipe view of the selected recipe.
export default function RecipeView(
    {selectedRecipe,
     
    }: RecipeViewProps
 
) {
        return <div>RecipeView
            <h3 className="recipe-heading mx-auto row">{selectedRecipe?.idMeal}  {selectedRecipe?.strMeal}</h3>
            <div className="row">
            <img  width={400} height={500}  className="view-image col-md-6" src= {(selectedRecipe?.idMeal === "New") ? selectedRecipe?.strMealThumb : selectedRecipe?.strMealThumb + "/medium"} alt={selectedRecipe?.strMeal} />
            
            <table className="ingredients  col-md-4">
              <tbody>
                <tr><td>{selectedRecipe?.strMeasure1}</td><td>{selectedRecipe?.strIngredient1}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure2}</td><td>{selectedRecipe?.strIngredient2}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure3}</td><td>{selectedRecipe?.strIngredient3}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure4}</td><td>{selectedRecipe?.strIngredient4}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure5}</td><td>{selectedRecipe?.strIngredient5}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure6}</td><td>{selectedRecipe?.strIngredient6}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure7}</td><td>{selectedRecipe?.strIngredient7}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure8}</td><td>{selectedRecipe?.strIngredient8}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure9}</td><td>{selectedRecipe?.strIngredient9}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure10}</td><td>{selectedRecipe?.strIngredient10}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure11}</td><td>{selectedRecipe?.strIngredient11}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure12}</td><td>{selectedRecipe?.strIngredient12}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure13}</td><td>{selectedRecipe?.strIngredient13}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure14}</td><td>{selectedRecipe?.strIngredient14}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure15}</td><td>{selectedRecipe?.strIngredient15}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure16}</td><td>{selectedRecipe?.strIngredient16}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure17}</td><td>{selectedRecipe?.strIngredient17}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure18}</td><td>{selectedRecipe?.strIngredient18}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure19}</td><td>{selectedRecipe?.strIngredient19}</td></tr>
                <tr><td>{selectedRecipe?.strMeasure20}</td><td>{selectedRecipe?.strIngredient20}</td></tr>
             </tbody>

            </table>
            </div>
            <div className="card ">
                <div className="card-body bg-warning">{selectedRecipe?.strInstructions}</div>
            </div>
        </div>


}