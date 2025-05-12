
import type {MealDB} from "./Data-types";




export default function RecipeView(
    {idMeal, strMeal, strInstructions, strMealThumb, 
        strIngredient1, 
    strIngredient2, 
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20
    }: MealDB

) {
        return <div>RecipeView
            <h3 className="recipe-heading mx-auto row">{idMeal}  {strMeal}</h3>
            <div className="row">
            <img className="view-image col-md-6" src={strMealThumb + '/medium'} alt={strMeal} />
            
            <table className="ingredients  col-md-4">
            
                <tr><td>{strMeasure1}</td><td>{strIngredient1}</td></tr>
                <tr><td>{strMeasure2}</td><td>{strIngredient2}</td></tr>
                <tr><td>{strMeasure3}</td><td>{strIngredient3}</td></tr>
                <tr><td>{strMeasure4}</td><td>{strIngredient4}</td></tr>
                <tr><td>{strMeasure5}</td><td>{strIngredient5}</td></tr>
                <tr><td>{strMeasure6}</td><td>{strIngredient6}</td></tr>
                <tr><td>{strMeasure7}</td><td>{strIngredient7}</td></tr>
                <tr><td>{strMeasure8}</td><td>{strIngredient8}</td></tr>
                <tr><td>{strMeasure9}</td><td>{strIngredient9}</td></tr>
                <tr><td>{strMeasure10}</td><td>{strIngredient10}</td></tr>
                <tr><td>{strMeasure11}</td><td>{strIngredient11}</td></tr>
                <tr><td>{strMeasure12}</td><td>{strIngredient12}</td></tr>
                <tr><td>{strMeasure13}</td><td>{strIngredient13}</td></tr>
                <tr><td>{strMeasure14}</td><td>{strIngredient14}</td></tr>
                <tr><td>{strMeasure15}</td><td>{strIngredient15}</td></tr>
                <tr><td>{strMeasure16}</td><td>{strIngredient16}</td></tr>
                <tr><td>{strMeasure17}</td><td>{strIngredient17}</td></tr>
                <tr><td>{strMeasure18}</td><td>{strIngredient18}</td></tr>
                <tr><td>{strMeasure19}</td><td>{strIngredient19}</td></tr>
                <tr><td>{strMeasure20}</td><td>{strIngredient20}</td></tr>


            </table>
            </div>
            <div className="card ">
                <div className="card-body bg-warning">{strInstructions}</div>
            </div>
        </div>


}