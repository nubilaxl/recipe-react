//import type {MealDB} from "./Data-types";


import type { MealDB} from "./Data-types";




export default function RecipeThumb({recipe}: {recipe: MealDB} ) {
    

    return (
        <figure>
     <figcaption >{recipe.strMeal} </figcaption> 
        <img src={recipe.strMealThumb + "/small"}  alt="photo" onClick={() =>
                                alert("Recipe image selected!")
        }/>
        </figure>
    
      
   )
}

//  <img src={recipe.strMealThumb + "/small"}  alt="photo" />