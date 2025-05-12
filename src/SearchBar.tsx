


import SearchSelectBox from "./SearchSelectBox";
import { searchType } from "./SelectLists";
import { category } from "./SelectLists";
import { area } from "./SelectLists";

export default function SearchBar(  ) {
        return (<div  className="row border"      >SearchBar
            <form><span>
               <SearchSelectBox name = "type" list = {searchType}/>
               <SearchSelectBox name = "category" list = {category}/>
               <SearchSelectBox name = "area" list = {area}/>
               <label htmlFor="searchString">Data</label>
                <input title="searchString" placeholder="query"   type="text" /> 
            </span></form>
        </div>)


}