import RecipeView from "./RecipeView";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";
import mealData from "./assets/recipes-mealdb.json"
import './App.css'
let meals = mealData.meals;


//let clickedIndex = 0;

    //fetch()
    //.then(response => response.json())
    //.then(data => {
    //Places the data in the table
    //mealData= data;
   //console.log(data)
   console.log(mealData.meals[0].idMeal);
       console.log(mealData.meals[0].strInstructions);
      console.log(mealData.meals[0].strMealThumb);
      console.log(mealData.meals[0].strMeal)       
                  
  //  })    
//.catch(error => console.log(error));  

          

 /*
           id  = {mealData.meals[0].idMeal}
          title = {mealData.meals[0].strMeal}
          imageURL = {mealData.meals[0].strMealThumb}
          instructions = {mealData.meals[0].strInstructions}
    */



  



export default function App() { 
  

    return (<div  className="container-fluid bg-light   border"   >
      <div className="row bg-light"  ><SearchBar/>
      </div>
      <div className="col" ><ToolBar/>
      <div className="row "  ><div className="col-sm-4  border" >
        <SideBar
        meals= {meals}/></div>
      
      <div className="col border"  ><RecipeView
         {...mealData.meals[0]}
     
      
      /></div></div></div>
    </div>)


}