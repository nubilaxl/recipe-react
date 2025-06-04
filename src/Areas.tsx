import { useLoaderData } from "react-router-dom"
import type { MealDB } from "./Data-types";


// The data is loaded into a table using a map function embedded in the JSX.
// I define the key and show Area and Meal name.

export default function Areas () {
    
    const data = useLoaderData() as MealDB[]
        
        
        return (
            
            <table className="table table-striped">
                <thead><td>Area</td><td>Recipe</td></thead>
            <tbody>
            {data.map((recipe, id) => (
        
          
          
           <tr key={id}> <td>{recipe.strArea}</td> <td>{recipe.strMeal}</td> </tr>
           
        
            ))}
        
    </tbody></table>
        );
}