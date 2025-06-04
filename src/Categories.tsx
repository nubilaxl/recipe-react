
//import { useParams } from "react-router-dom"

import { useLoaderData } from "react-router-dom"
import type { MealDB } from "./Data-types"


// The data is loaded into a table using a map function embedded in the JSX.
// I define the key and show Category and Meal name.



export default function Categories( ) {
    
    const data = useLoaderData() as MealDB[]
    
    
    return (
        <table className="table table-striped">
            <thead><td>Category</td><td>Recipe</td></thead>
        <tbody>
        {data.map((recipe, id) => (
    
      
      
       <tr key={id}> <td>{recipe.strCategory}</td> <td>{recipe.strMeal}</td> </tr>
       
    
        ))}
    
</tbody></table>
    );
}