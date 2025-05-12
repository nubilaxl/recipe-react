export default function QueryTypeSelect() {
        return (<div>QueryTypeSelect
            <select name="searchType"  title="pick"  id="searchTypeSelect">
                <option value="Meal Name">Meal Name</option>
                <option value="First Letter">First Letter</option>
                <option value="By ID">By ID</option>
                <option value="Random Meal">Random Meal</option>
                <option value="10 Random Meals">10 Random Meals</option>
                <option value="Latest Meals">Latest Meals</option>
                <option value="Main Ingredient">Main Ingredient</option>
                <option value="Multi-Ingredient">Multi-Ingredient</option>
                

            </select>

            <select name="category"  title="category"   id="category">
                <option value="Seafood">Seafood</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Beef">Beef</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Chicken">Chicken</option>
                <option value="Dessert">Dessert</option>
                <option value="Goat">Goat</option>
                <option value="Lamb">Lamb</option>
                <option value="Pasta">Pasta</option>
                <option value="Side">Side</option>
                <option value="Starter">Starter</option>
                <option value="Vegan">Vegan</option>
            </select>
            

            <select name="world-region" title="world-region"  id="world-region">
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Canadian">Canadian</option>
                <option value="Chinese">Chinese</option>
                <option value="Croatian">Croatian</option>
                <option value="Dutch">Dutch</option>
                <option value="Egyptian">Egyptian</option>
                <option value="Filipino">Filipino</option>
                <option value="French">French</option>
                <option value="Greek">Greek</option>
                <option value="Indian">Indian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Jamaican">Jamaican</option>
                <option value="Japanese">Japanese</option>
                <option value="Kenyan">Kenyan</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Mexican">Mexican</option>
                <option value="Moroccan">Moroccan</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Russian">Russian</option>
                <option value="Spanish">Spanish</option>
                <option value="Thai">Thai</option>
                <option value="Tunisian">Tunisian</option>
                <option value="Turkish">Turkish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Uruguayan">Uruguayan</option>
                <option value="Vietnamese">Vietnamese</option>





            </select>
        </div>)
}