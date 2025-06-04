import RecipeView from "./RecipeView";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";
//import mealData from "./assets/recipes-mealdb.json"
import type {MealDB} from "./Data-types";
import blankThumbnail from "./assets/blank-thumbnail.jpeg"
import './App.css'
import { useEffect, useState } from "react";
import { API_URL } from "./assets/API_KEY";


//let meals = mealData.meals;




          
 



export default function App() { 
    // This states purpose is to use and change the recipe data
    let [recipes, setRecipes] = useState<MealDB[]>([])
    // This states purpose is to select a recipe in the sidebar for viewing
    const [selectedRecipeId, setSelectedRecipeId] = useState(0)
    // This states purpose is to change the toggle status of the delete button 
    // and used to display the X buttons on the thumbnails
    const [toggleDelete, setToggleDelete] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    
    // The useEffect means callback will run on first render because the dependency
    // array is empty. The try-catch error handling block manages the error states and
    // loading states. If the fetch returns OK, the full data array is returned and the useState
    // function sets that data.
    useEffect( () => {
        const readData = async () => {
            setLoading(true)
            try {
                const response = await fetch(API_URL, {
                                method: 'GET',
                                headers: {'content-type':'application/json'},
                                })
                if(!response.ok) {
                    setError("Error: " + response.statusText)
                }
                else {
                    const data = await response.json()
                    setError("")
                    setRecipes(data)
                }
            } catch(error: any) {
                
                setError("Error: " + error.message)
            }
            setLoading(false)
        }
        readData()
    }, []) //Run once after first render


    
    // This function is used in the onClick method of the Delete button
    // and toggles the state variable from true to false and vice versa
    const handleDeleteToggleButtonClick = () => {
        setToggleDelete(!toggleDelete)
    }

    // This function is used to update the favorite data value from true
    // to false and vice versa. It uses the map on the recipes array and checks
    // the particular id to determine whether to change the favorite property 
    // of the data object.
    const updateRecipeFavorite = (id?: number) => {
        if (id === undefined) {
                    return
                }

        //Update the frontend
        setRecipes( recipes.map(recipe => (
        recipe.id !== id ? recipe :
        {...recipe, favorite: !recipe.favorite})
        ))
       

        recipes.map(recipe => (
        recipe.id !== id ? recipe :
        updateBackend({...recipe, favorite: !recipe.favorite}, id)
        ))
        
    }

    // This code updates the frontend and sets the recipe data to the new
    // property value.
    const updateRecipe =  (property: string, newValue: any, id?: number) => {
                
                if (id === undefined) {
                    return
                }

                setRecipes(currentRecipes => currentRecipes.map(recipe => (
                                recipe.id !== id ? recipe : {
                                ...recipe,
                                [property]: newValue
                            }
                            )))
        }


    // This function does an API update when a list of updated property values
    // are passed. The API PUT request requires a URL string with an ID and a json
    // body with the updated values. If the fetch is OK, the recipe data is set 
    // using a map function to assign each value in the returned data to the 
    // corresponding property in the recipe that is indicated by id.
    const updateBackend = async (recipeValues: MealDB, id?: number) => {
                
                if (id === undefined) {
                    return
                }
                setLoading(true)
                try {

                    const response = await fetch(API_URL + "/" + id, {
                                method: 'PUT',
                                headers: {'content-type':'application/json'},
                                body: JSON.stringify(recipeValues)
                                })
                    if(!response.ok) {
                    setError("Error: " + response.statusText)
                    }
                    else {

                            const data = await response.json()
                            setError("")
                            
                            
                            
                            setRecipes(currentRecipes => currentRecipes.map(recipe => (
                                recipe.id !== id ? recipe : Object.assign(recipe, data)
                            )))
                           



                            console.log(data)
                            
                          
                                
                    }
                } catch(error: any) {
                    
                    setError("Error: " + error.message)
                }
                setLoading(false)
            }

    // Passes new data to the POST body, and if the fetch is OK, an object recipe is returned
    // and inserted into the useState data.
    const createData = async (newData: MealDB) => {
                setLoading(true)
                try {

                    const response = await fetch(API_URL, {
                                method: 'POST',
                                headers: {'content-type':'application/json'},
                                body: JSON.stringify(newData)
                                })
                    if(!response.ok) {
                    setError("Error: " + response.statusText)
                    }
                    else {
                    const data = await response.json()
                    setError("")
                    console.log(data)
                    setRecipes([...recipes, newData])
                    }
                } catch(error: any) {
                    
                    setError("Error: " + error.message)
                }
                setLoading(false)
        

            }
         
    


    // This function uses the selectedRecipeId state variable to find it
    // among the id's in all the recipes and returns an individual recipe
    // object to selectedRecipe. The returned object is used to pass as a data
    // prop to the Recipe View.
    const selectedRecipe = recipes.find(r => (r.id === selectedRecipeId))

    // This function sets the data values to default values and uses the setRecipe
    // state function to add the new data to the recipes data.
    const addNewRecipe = () => {
        const newRecipe = {
            id: recipes.length ? recipes[recipes.length - 1].id + 1: 0,
            favorite: false,
            idMeal: "New",
            strMeal: "New Meal Name",
            strMealAlternate: "",
            strCategory: "",
            strArea: "",
            strInstructions: "",
            strMealThumb: blankThumbnail,
            strTags: "",
            strYoutube: "",
            strIngredient1:  "",
            strIngredient2: "",
            strIngredient3: "",
            strIngredient4: "",
            strIngredient5: "",
            strIngredient6: "",
            strIngredient7: "",
            strIngredient8: "",
            strIngredient9: "",
            strIngredient10: "",
            strIngredient11: "",
            strIngredient12: "",
            strIngredient13: "",
            strIngredient14: "",
            strIngredient15: "",
            strIngredient16: "",
            strIngredient17: "",
            strIngredient18: "",
            strIngredient19: "",
            strIngredient20: "",
            strMeasure1: "",
            strMeasure2: "",
            strMeasure3: "",
            strMeasure4: "",
            strMeasure5: "",
            strMeasure6: "",
            strMeasure7: "",
            strMeasure8: "",
            strMeasure9: "",
            strMeasure10: "",
            strMeasure11: "",
            strMeasure12: "",
            strMeasure13: "",
            strMeasure14: "",
            strMeasure15: "",
            strMeasure16: "",
            strMeasure17: "",
            strMeasure18: "",
            strMeasure19: "",
            strMeasure20: "",
            strSource: "",
            strImageSource: "",
            strCreativeCommonsConfirmed: "",
            dateModified: new Date()
        }

        createData(newRecipe)
    }
    

    // Passes the id parameter to the fetch along with a DELETE request. If the
    // response is OK, the recipes useState is updated upsing a filter to 
    // remove the recipe according to the id.
    
    // This function uses the filter function to find and exclude a particular
    // id using the setRecipes state function. This prop is passed from sidebar 
    // to recipethumb where the X button is placed.
    const deleteRecipe = async (id?: number) => {
            if (id === undefined) {
                    return
                }

            setLoading(true)
            try {
                const response = await fetch(API_URL + "/" + id, {
                                method: 'DELETE',
                                
                                })
                if(!response.ok) {
                    setError("Error: " + response.statusText)
                }
                else {
                    
                    setRecipes(recipes.filter(r => r.id !== id))
                    setError("")
                    
                }
            } catch(error: any) {
                
                setError("Error: " + error.message)
            }
            setLoading(false)
        }

    // This is the JSX returned to be reconciled with the HTML views.
    return (loading ? <p> Loading... </p>:
    error ? <p> {error}</p>:
        
        <div  className="container-fluid bg-light   border"   >
            
      <div className="row bg-light"  ><SearchBar/>
      </div>
      <div className="col" ><ToolBar
      addNewRecipe={addNewRecipe}
      handleDeleteToggleButtonClick={handleDeleteToggleButtonClick}
      toggleDelete={toggleDelete}
      updateRecipe={updateRecipe}
      updateBackend={updateBackend}
      selectedRecipe={selectedRecipe}
      />
      <div className="row "  ><div className="col-sm-4  border" >
        <SideBar
        recipes= {recipes}
        selectedRecipeId = {selectedRecipeId}
        setSelectedRecipeId = {setSelectedRecipeId}
        deleteRecipe={deleteRecipe}
        toggleDelete={toggleDelete}
        updateRecipeFavorite={updateRecipeFavorite}
        
        
        
        /></div>
      
      <div className="col border"  ><RecipeView
         //{...mealData.meals[0]}
         selectedRecipe = {selectedRecipe}
         
     
      
      />
      
      
      </div></div></div>
    </div>)


}