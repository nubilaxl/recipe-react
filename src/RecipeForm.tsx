import { useState, type ChangeEvent, type MouseEvent } from "react"
import type { MealDB } from "./Data-types"
import blankThumbnail from "./assets/blank-thumbnail.jpeg"



type Props = {
    updateRecipe: (property: string, value: any, id?: number) => void
    updateBackend : (recipeValues: MealDB, id?: number) => void
    selectedRecipe?: MealDB
    handleClose: () => void
}


export default function RecipeForm({
    updateRecipe,
    selectedRecipe,
    updateBackend,
    handleClose
}: Props) {
    
    let [count, setCount] = useState(1);
    const [moreIngredients, setMoreIngredients] = useState(false)
    const [formValues, setFormValues] = useState({
        favorite: selectedRecipe?.favorite || false,
        idMeal: selectedRecipe?.idMeal || selectedRecipe?.id, 
        strMealAlternate: selectedRecipe?.strMealAlternate || "",
        strCategory: selectedRecipe?.strCategory || "",
        strArea: selectedRecipe?.strArea || "",
        strMeal: selectedRecipe?.strMeal || "",
        strMealThumb: selectedRecipe?.strMealThumb || blankThumbnail,
        strTags: selectedRecipe?.strTags || "",
        strYoutube: selectedRecipe?.strYoutube || "",
        strMeasure1: selectedRecipe?.strMeasure1  || "",
        strIngredient1: selectedRecipe?.strIngredient1 || "",
        strMeasure2: selectedRecipe?.strMeasure2 || "", 
        strIngredient2: selectedRecipe?.strIngredient2 || "",
         strMeasure3: selectedRecipe?.strMeasure3 || "",
        strIngredient3: selectedRecipe?.strIngredient3 || "",
        strMeasure4: selectedRecipe?.strMeasure4 || "",
        strIngredient4: selectedRecipe?.strIngredient4 || "",
        strMeasure5: selectedRecipe?.strMeasure5 || "",
        strIngredient5: selectedRecipe?.strIngredient5 || "",
        strMeasure6: selectedRecipe?.strMeasure6 || "",
        strIngredient6: selectedRecipe?.strIngredient6 || "",
        strMeasure7: selectedRecipe?.strMeasure7 || "",
        strIngredient7: selectedRecipe?.strIngredient7 || "",
        strMeasure8: selectedRecipe?.strMeasure8 || "",
        strIngredient8: selectedRecipe?.strIngredient8 || "",
        strMeasure9: selectedRecipe?.strMeasure9 || "", 
        strIngredient9: selectedRecipe?.strIngredient9 || "",
         strMeasure10: selectedRecipe?.strMeasure10 || "",
        strIngredient10: selectedRecipe?.strIngredient10 || "",
        strMeasure11: selectedRecipe?.strMeasure11 || "",
        strIngredient11: selectedRecipe?.strIngredient11 || "",
        strMeasure12: selectedRecipe?.strMeasure12 || "",
        strIngredient12: selectedRecipe?.strIngredient12 || "",
        strMeasure13: selectedRecipe?.strMeasure13 || "",
        strIngredient13: selectedRecipe?.strIngredient13 || "",
        strMeasure14: selectedRecipe?.strMeasure14 || "",
        strIngredient14: selectedRecipe?.strIngredient14 || "",
        strMeasure15: selectedRecipe?.strMeasure15 || "",
        strIngredient15: selectedRecipe?.strIngredient15 || "",
        strMeasure16: selectedRecipe?.strMeasure16 || "",
        strIngredient16: selectedRecipe?.strIngredient16 || "",
        strMeasure17: selectedRecipe?.strMeasure17 || "",
        strIngredient17: selectedRecipe?.strIngredient17 || "",
        strMeasure18: selectedRecipe?.strMeasure18 || "",
        strIngredient18: selectedRecipe?.strIngredient18 || "",
        strMeasure19: selectedRecipe?.strMeasure19 || "",
        strIngredient19: selectedRecipe?.strIngredient19 || "",
        strMeasure20: selectedRecipe?.strMeasure20 || "",
        strIngredient20: selectedRecipe?.strIngredient20 || "",
        strInstructions: selectedRecipe?.strInstructions || "",
        strSource: selectedRecipe?.strSource || "",
        strImageSource: selectedRecipe?.strImageSource || "",
        strCreativeCommonsConfirmed: selectedRecipe?.strCreativeCommonsConfirmed || "",
        dateModified: selectedRecipe?.dateModified || new Date()        
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => 
        setFormValues({ 
            ...formValues, 
            [event.target.name]: event.target.value 
        })

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        
        updateRecipe("favorite", formValues.favorite, selectedRecipe?.id )
        updateRecipe("idMeal", formValues.idMeal, selectedRecipe?.id  )
        updateRecipe("strMealAlternate", formValues.strMealAlternate, selectedRecipe?.id  )
        updateRecipe("strCategory", formValues.strCategory, selectedRecipe?.id  )
        updateRecipe("strArea", formValues.strArea, selectedRecipe?.id  )
        updateRecipe("strTags", formValues.strTags, selectedRecipe?.id  )
        updateRecipe("strYoutube", formValues.strYoutube, selectedRecipe?.id  )
        updateRecipe("strIngredient1", formValues.strIngredient1, selectedRecipe?.id)
        updateRecipe("strIngredient2", formValues.strIngredient2, selectedRecipe?.id)
        updateRecipe("strIngredient3", formValues.strIngredient3, selectedRecipe?.id)
        updateRecipe("strIngredient4", formValues.strIngredient4, selectedRecipe?.id)
        updateRecipe("strIngredient5", formValues.strIngredient5, selectedRecipe?.id)
        updateRecipe("strIngredient6", formValues.strIngredient6, selectedRecipe?.id)
        updateRecipe("strIngredient7", formValues.strIngredient7, selectedRecipe?.id)
        updateRecipe("strIngredient8", formValues.strIngredient8, selectedRecipe?.id)
        updateRecipe("strIngredient9", formValues.strIngredient9, selectedRecipe?.id)
        updateRecipe("strIngredient10", formValues.strIngredient10, selectedRecipe?.id)
        updateRecipe("strIngredient11", formValues.strIngredient11, selectedRecipe?.id)
        updateRecipe("strIngredient12", formValues.strIngredient12, selectedRecipe?.id)
        updateRecipe("strIngredient13", formValues.strIngredient13, selectedRecipe?.id)
        updateRecipe("strIngredient14", formValues.strIngredient14, selectedRecipe?.id)
        updateRecipe("strIngredient15", formValues.strIngredient15, selectedRecipe?.id)
        updateRecipe("strIngredient16", formValues.strIngredient16, selectedRecipe?.id)
        updateRecipe("strIngredient17", formValues.strIngredient17, selectedRecipe?.id)
        updateRecipe("strIngredient18", formValues.strIngredient18, selectedRecipe?.id)
        updateRecipe("strIngredient19", formValues.strIngredient19, selectedRecipe?.id)
        updateRecipe("strIngredient20", formValues.strIngredient20, selectedRecipe?.id)
        updateRecipe("strMeasure1", formValues.strMeasure1, selectedRecipe?.id)
        updateRecipe("strMeasure2", formValues.strMeasure2, selectedRecipe?.id)
        updateRecipe("strMeasure3", formValues.strMeasure3, selectedRecipe?.id)
        updateRecipe("strMeasure4", formValues.strMeasure4, selectedRecipe?.id)
        updateRecipe("strMeasure5", formValues.strMeasure5, selectedRecipe?.id)
        updateRecipe("strMeasure6", formValues.strMeasure6, selectedRecipe?.id)
        updateRecipe("strMeasure7", formValues.strMeasure7, selectedRecipe?.id)
        updateRecipe("strMeasure8", formValues.strMeasure8, selectedRecipe?.id)
        updateRecipe("strMeasure9", formValues.strMeasure9, selectedRecipe?.id)
        updateRecipe("strMeasure10", formValues.strMeasure10, selectedRecipe?.id)
        updateRecipe("strMeasure11", formValues.strMeasure11, selectedRecipe?.id)
        updateRecipe("strMeasure12", formValues.strMeasure12, selectedRecipe?.id)
        updateRecipe("strMeasure13", formValues.strMeasure13, selectedRecipe?.id)
        updateRecipe("strMeasure14", formValues.strMeasure14, selectedRecipe?.id)
        updateRecipe("strMeasure15", formValues.strMeasure15, selectedRecipe?.id)
        updateRecipe("strMeasure16", formValues.strMeasure16, selectedRecipe?.id)
        updateRecipe("strMeasure17", formValues.strMeasure17, selectedRecipe?.id)
        updateRecipe("strMeasure18", formValues.strMeasure18, selectedRecipe?.id)
        updateRecipe("strMeasure19", formValues.strMeasure19, selectedRecipe?.id)
        updateRecipe("strMeasure20", formValues.strMeasure20, selectedRecipe?.id)
        updateRecipe("strMeal", formValues.strMeal, selectedRecipe?.id)
        updateRecipe("strMealThumb", formValues.strMealThumb, selectedRecipe?.id)
        updateRecipe("strInstructions", formValues.strInstructions, selectedRecipe?.id)
        updateRecipe("strSource", formValues.strSource, selectedRecipe?.id  )
        updateRecipe("strImageSource", formValues.strImageSource, selectedRecipe?.id  )
        updateRecipe("strCreativeCommonsConfirmed", formValues.strCreativeCommonsConfirmed, selectedRecipe?.id  )
        updateRecipe("dateModified", formValues.dateModified, selectedRecipe?.id )
        
        if (selectedRecipe === undefined)
            return
        else
        {
             
        updateBackend({...selectedRecipe, favorite: selectedRecipe.favorite,
            strMeasure1: formValues.strMeasure1,
            strIngredient1: formValues.strIngredient1,
            strMeal: formValues.strMeal,
            strMealAlternate: formValues.strMealAlternate,
            strCategory: formValues.strCategory,
            strArea: formValues.strCategory,
            strInstructions: formValues.strInstructions,
            strMealThumb: formValues.strMealThumb,
            strTags: formValues.strTags,
            strYoutube: formValues.strYoutube,
            strIngredient2: formValues.strIngredient2,
            strIngredient3: formValues.strIngredient3,
            strIngredient4: formValues.strIngredient4,
            strIngredient5: formValues.strIngredient5,
            strIngredient6: formValues.strIngredient6,
            strIngredient7: formValues.strIngredient7,
            strIngredient8: formValues.strIngredient8,
            strIngredient9: formValues.strIngredient9,
            strIngredient10: formValues.strIngredient10,
            strIngredient11: formValues.strIngredient11,
            strIngredient12: formValues.strIngredient12,
            strIngredient13: formValues.strIngredient13,
            strIngredient14: formValues.strIngredient14,
            strIngredient15: formValues.strIngredient15,
            strIngredient16: formValues.strIngredient16,
            strIngredient17: formValues.strIngredient17,
            strIngredient18: formValues.strIngredient18,
            strIngredient19: formValues.strIngredient19,
            strIngredient20: formValues.strIngredient20,
            
            strMeasure2: formValues.strMeasure2,
            strMeasure3: formValues.strMeasure3,
            strMeasure4: formValues.strMeasure4,
            strMeasure5: formValues.strMeasure5,
            strMeasure6: formValues.strMeasure6,
            strMeasure7: formValues.strMeasure7,
            strMeasure8: formValues.strMeasure8,
            strMeasure9: formValues.strMeasure9,
            strMeasure10: formValues.strMeasure10,
            strMeasure11: formValues.strMeasure11,
            strMeasure12: formValues.strMeasure12,
            strMeasure13: formValues.strMeasure13,
            strMeasure14: formValues.strMeasure14,
            strMeasure15: formValues.strMeasure15,
            strMeasure16: formValues.strMeasure16,
            strMeasure17: formValues.strMeasure17,
            strMeasure18: formValues.strMeasure18,
            strMeasure19: formValues.strMeasure19,
            strMeasure20: formValues.strMeasure20,
            strSource: formValues.strSource,
            strImageSource: formValues.strImageSource,
            strCreativeCommonsConfirmed: formValues.strCreativeCommonsConfirmed,
            dateModified: formValues.dateModified
        }, selectedRecipe.id)
        
        }
        //    updateBackend(selectedRecipe, selectedRecipe?.id)
        handleClose()
    }

    const addMoreIngredients = ( newCount: number) => {
        
        if(moreIngredients === false) {
            setMoreIngredients(!moreIngredients)
            setCount(newCount + 1)
        }
        else if( moreIngredients === true && newCount <= 20)
            setCount(newCount + 1)
        
    } 

    return (
        <form>
            <div className="mb-2">
                <label htmlFor="meal-name" className="form-label">Meal Name:</label>
                <input id="meal-name" type="text" className="form-control" 
                    name="strMeal"
                    onChange={handleChange}
                    value={formValues.strMeal}
                />
            </div>
            <div className="col auto">
                <label htmlFor="measure-1" className="form-label">Measure:</label>
                <input id="measure-1" type="text" className="form-control-sm" 
                    name="strMeasure1"
                    onChange={handleChange}
                    value={formValues.strMeasure1}
                />
                <label htmlFor="ingredient-1" className="form-label">Ingredient:</label>
                <input id="ingredient-1" type="text" className="col form-control-sm" 
                    name="strIngredient1"
                    onChange={handleChange}
                    value={formValues.strIngredient1}  
                />
                {count <= 20 &&
                <button type="button" className="btn btn-secondary me-2" onClick={() => addMoreIngredients(count)}>Add More Ingredients</button>
                }
                </div>
            {moreIngredients && count >= 2 &&
            <div className="col auto">
                 <label htmlFor="measure-2" className="form-label">Measure:</label>
                <input id="measure-2" type="text" className="form-control-sm" 
                    name="strMeasure2"
                    onChange={handleChange}
                    value={formValues.strMeasure2}
                />
                <label htmlFor="ingredient-2" className="form-label">Ingredient:</label>
                <input id="ingredient-2" type="text" className="col form-control-sm" 
                    name="strIngredient2"
                    onChange={handleChange}
                    value={formValues.strIngredient2}  
                />
                
            </div>
            }
            {moreIngredients && count >= 3 &&
            <div className="col auto">
                 <label htmlFor="measure-3" className="form-label">Measure:</label>
                <input id="measure-3" type="text" className="form-control-sm" 
                    name="strMeasure3"
                    onChange={handleChange}
                    value={formValues.strMeasure3}
                />
                <label htmlFor="ingredient-3" className="form-label">Ingredient:</label>
                <input id="ingredient-3" type="text" className="col form-control-sm" 
                    name="strIngredient3"
                    onChange={handleChange}
                    value={formValues.strIngredient3}  
                />
                
            </div>
            }
            {moreIngredients && count >= 4 &&
            <div className="col auto">
                 <label htmlFor="measure-4" className="form-label">Measure:</label>
                <input id="measure-4" type="text" className="form-control-sm" 
                    name="strMeasure4"
                    onChange={handleChange}
                    value={formValues.strMeasure4}
                />
                <label htmlFor="ingredient-4" className="form-label">Ingredient:</label>
                <input id="ingredient-4" type="text" className="col form-control-sm" 
                    name="strIngredient4"
                    onChange={handleChange}
                    value={formValues.strIngredient4}  
                />
                
            </div>
            }
            {moreIngredients && count >= 5 &&
            <div className="col auto">
                 <label htmlFor="measure-5" className="form-label">Measure:</label>
                <input id="measure-5" type="text" className="form-control-sm" 
                    name="strMeasure5"
                    onChange={handleChange}
                    value={formValues.strMeasure5}
                />
                <label htmlFor="ingredient-5" className="form-label">Ingredient:</label>
                <input id="ingredient-5" type="text" className="col form-control-sm" 
                    name="strIngredient5"
                    onChange={handleChange}
                    value={formValues.strIngredient5}  
                />
                
            </div>
            }
            {moreIngredients && count >= 6 &&
            <div className="col auto">
                 <label htmlFor="measure-6" className="form-label">Measure:</label>
                <input id="measure-6" type="text" className="form-control-sm" 
                    name="strMeasure6"
                    onChange={handleChange}
                    value={formValues.strMeasure6}
                />
                <label htmlFor="ingredient-6" className="form-label">Ingredient:</label>
                <input id="ingredient-6" type="text" className="col form-control-sm" 
                    name="strIngredient6"
                    onChange={handleChange}
                    value={formValues.strIngredient6}  
                />
                
            </div>
            }
            {moreIngredients && count >= 7 &&
            <div className="col auto">
                 <label htmlFor="measure-7" className="form-label">Measure:</label>
                <input id="measure-7" type="text" className="form-control-sm" 
                    name="strMeasure7"
                    onChange={handleChange}
                    value={formValues.strMeasure7}
                />
                <label htmlFor="ingredient-7" className="form-label">Ingredient:</label>
                <input id="ingredient-7" type="text" className="col form-control-sm" 
                    name="strIngredient7"
                    onChange={handleChange}
                    value={formValues.strIngredient7}  
                />
                
            </div>
            }
            {moreIngredients && count >= 8 &&
            <div className="col auto">
                 <label htmlFor="measure-8" className="form-label">Measure:</label>
                <input id="measure-8" type="text" className="form-control-sm" 
                    name="strMeasure8"
                    onChange={handleChange}
                    value={formValues.strMeasure8}
                />
                <label htmlFor="ingredient-8" className="form-label">Ingredient:</label>
                <input id="ingredient-8" type="text" className="col form-control-sm" 
                    name="strIngredient8"
                    onChange={handleChange}
                    value={formValues.strIngredient8}  
                />
                
            </div>
            }
            {moreIngredients && count >= 9 &&
            <div className="col auto">
                 <label htmlFor="measure-9" className="form-label">Measure:</label>
                <input id="measure-9" type="text" className="form-control-sm" 
                    name="strMeasure9"
                    onChange={handleChange}
                    value={formValues.strMeasure9}
                />
                <label htmlFor="ingredient-9" className="form-label">Ingredient:</label>
                <input id="ingredient-9" type="text" className="col form-control-sm" 
                    name="strIngredient9"
                    onChange={handleChange}
                    value={formValues.strIngredient9}  
                />
                
            </div>
            }
            {moreIngredients && count >= 10 &&
            <div className="col auto">
                 <label htmlFor="measure-10" className="form-label">Measure:</label>
                <input id="measure-10" type="text" className="form-control-sm" 
                    name="strMeasure10"
                    onChange={handleChange}
                    value={formValues.strMeasure10}
                />
                <label htmlFor="ingredient-10" className="form-label">Ingredient:</label>
                <input id="ingredient-10" type="text" className="col form-control-sm" 
                    name="strIngredient10"
                    onChange={handleChange}
                    value={formValues.strIngredient10}  
                />
                
            </div>
            }
            {moreIngredients && count >= 11 &&
            <div className="col auto">
                 <label htmlFor="measure-11" className="form-label">Measure:</label>
                <input id="measure-11" type="text" className="form-control-sm" 
                    name="strMeasure11"
                    onChange={handleChange}
                    value={formValues.strMeasure11}
                />
                <label htmlFor="ingredient-11" className="form-label">Ingredient:</label>
                <input id="ingredient-11" type="text" className="col form-control-sm" 
                    name="strIngredient11"
                    onChange={handleChange}
                    value={formValues.strIngredient11}  
                />
                
            </div>
            }
            {moreIngredients && count >= 12 &&
            <div className="col auto">
                 <label htmlFor="measure-12" className="form-label">Measure:</label>
                <input id="measure-12" type="text" className="form-control-sm" 
                    name="strMeasure12"
                    onChange={handleChange}
                    value={formValues.strMeasure12}
                />
                <label htmlFor="ingredient-12" className="form-label">Ingredient:</label>
                <input id="ingredient-12" type="text" className="col form-control-sm" 
                    name="strIngredient12"
                    onChange={handleChange}
                    value={formValues.strIngredient12}  
                />
                
            </div>
            }
            {moreIngredients && count >= 13 &&
            <div className="col auto">
                 <label htmlFor="measure-13" className="form-label">Measure:</label>
                <input id="measure-13" type="text" className="form-control-sm" 
                    name="strMeasure13"
                    onChange={handleChange}
                    value={formValues.strMeasure13}
                />
                <label htmlFor="ingredient-13" className="form-label">Ingredient:</label>
                <input id="ingredient-13" type="text" className="col form-control-sm" 
                    name="strIngredient13"
                    onChange={handleChange}
                    value={formValues.strIngredient13}  
                />
                
            </div>
            }
            {moreIngredients && count >= 14 &&
            <div className="col auto">
                 <label htmlFor="measure-14" className="form-label">Measure:</label>
                <input id="measure-14" type="text" className="form-control-sm" 
                    name="strMeasure14"
                    onChange={handleChange}
                    value={formValues.strMeasure14}
                />
                <label htmlFor="ingredient-14" className="form-label">Ingredient:</label>
                <input id="ingredient-14" type="text" className="col form-control-sm" 
                    name="strIngredient14"
                    onChange={handleChange}
                    value={formValues.strIngredient14}  
                />
                
            </div>
            }
            {moreIngredients && count >= 15 &&
            <div className="col auto">
                 <label htmlFor="measure-15" className="form-label">Measure:</label>
                <input id="measure-15" type="text" className="form-control-sm" 
                    name="strMeasure15"
                    onChange={handleChange}
                    value={formValues.strMeasure15}
                />
                <label htmlFor="ingredient-15" className="form-label">Ingredient:</label>
                <input id="ingredient-15" type="text" className="col form-control-sm" 
                    name="strIngredient15"
                    onChange={handleChange}
                    value={formValues.strIngredient15}  
                />
                
            </div>
            }
            {moreIngredients && count >= 16 &&
            <div className="col auto">
                 <label htmlFor="measure-16" className="form-label">Measure:</label>
                <input id="measure-16" type="text" className="form-control-sm" 
                    name="strMeasure16"
                    onChange={handleChange}
                    value={formValues.strMeasure16}
                />
                <label htmlFor="ingredient-16" className="form-label">Ingredient:</label>
                <input id="ingredient-16" type="text" className="col form-control-sm" 
                    name="strIngredient16"
                    onChange={handleChange}
                    value={formValues.strIngredient16}  
                />
                
            </div>
            }
            {moreIngredients && count >= 17 &&
            <div className="col auto">
                 <label htmlFor="measure-17" className="form-label">Measure:</label>
                <input id="measure-17" type="text" className="form-control-sm" 
                    name="strMeasure17"
                    onChange={handleChange}
                    value={formValues.strMeasure17}
                />
                <label htmlFor="ingredient-17" className="form-label">Ingredient:</label>
                <input id="ingredient-17" type="text" className="col form-control-sm" 
                    name="strIngredient17"
                    onChange={handleChange}
                    value={formValues.strIngredient17}  
                />
                
            </div>
            }
            {moreIngredients && count >= 18 &&
            <div className="col auto">
                 <label htmlFor="measure-18" className="form-label">Measure:</label>
                <input id="measure-18" type="text" className="form-control-sm" 
                    name="strMeasure18"
                    onChange={handleChange}
                    value={formValues.strMeasure18}
                />
                <label htmlFor="ingredient-18" className="form-label">Ingredient:</label>
                <input id="ingredient-18" type="text" className="col form-control-sm" 
                    name="strIngredient18"
                    onChange={handleChange}
                    value={formValues.strIngredient18}  
                />
                
            </div>
            }
            {moreIngredients && count >= 19 &&
            <div className="col auto">
                 <label htmlFor="measure-19" className="form-label">Measure:</label>
                <input id="measure-19" type="text" className="form-control-sm" 
                    name="strMeasure19"
                    onChange={handleChange}
                    value={formValues.strMeasure19}
                />
                <label htmlFor="ingredient-19" className="form-label">Ingredient:</label>
                <input id="ingredient-19" type="text" className="col form-control-sm" 
                    name="strIngredient19"
                    onChange={handleChange}
                    value={formValues.strIngredient19}  
                />
                
            </div>
            }
            {moreIngredients && count >= 20 &&
            <div className="col auto">
                 <label htmlFor="measure-20" className="form-label">Measure:</label>
                <input id="measure-20" type="text" className="form-control-sm" 
                    name="strMeasure20"
                    onChange={handleChange}
                    value={formValues.strMeasure20}
                />
                <label htmlFor="ingredient-20" className="form-label">Ingredient:</label>
                <input id="ingredient-20" type="text" className="col form-control-sm" 
                    name="strIngredient20"
                    onChange={handleChange}
                    value={formValues.strIngredient20}  
                />
                
            </div>
            }
            <div className="mb-2">
                <label htmlFor="instructions" className="form-label">Instructions:</label>
                <textarea id="instructions"  className="form-control" 
                    name="strInstructions"
                    onChange={handleChange}
                    value={formValues.strInstructions}  
                >Your instructions here.
                </textarea>
            </div>
            <div className="text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>Cancel</button>
                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
            </div>
        </form>
    )


}