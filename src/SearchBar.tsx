


import SearchSelectBox from "./SearchSelectBox";
import { searchType } from "./SelectLists";
import { category } from "./SelectLists";
import { area } from "./SelectLists";

// This function uses JSX to display the Search form. It uses lists to populate the three select boxes.
export default function SearchBar(  ) {
        return (<div  className="row border"      >SearchBar
            <form><span>
               <SearchSelectBox name = "type" list = {searchType}/>
               <SearchSelectBox name = "category" list = {category}/>
               <SearchSelectBox name = "area" list = {area}/>
               <label htmlFor="searchString">Data</label>
                <input id="searchString"   title="searchString" placeholder="query"   type="text" /> 
            </span></form>
        </div>)


}