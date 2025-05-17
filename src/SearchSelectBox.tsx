export default function SearchSelectBox( {name, list}: {name: string, list: {id:number, name:string}[]} ) {
// This function uses the name and the list props to populate the selection options.
return (
            <select className="me-2"  name={name}  title={name}  id={name}>
            
                {list.map(list => <option key={list.id} value={list.name}>{list.name}</option> ) }   
           </select>
        
        )
}