
import RecipeThumb from "./RecipeThumb";
import type {Meals} from "./Data-types";
//import meal from "./assets/recipes-mealdb.json"
//let meals = meal.meals



export default function SideBar({meals}:Meals
    
) {
        return (<div className="sidebar  container  row col-md-9"    >SideBar
            {...meals.map(r => <RecipeThumb key={r.idMeal} recipe = {r} />
                


            )
            
            }
        </div>
        )


}