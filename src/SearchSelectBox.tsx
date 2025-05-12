export default function SearchSelectBox( {name, list}: {name: string, list: string[]} ) {

return (
            <select className="me-2"  name={name}  title={name}  id={name}>
            
                {list.map(list => <option value={list}>{list}</option> ) }   
           </select>
        
        )
}