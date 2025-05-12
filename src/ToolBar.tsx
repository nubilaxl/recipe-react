import ToolButton from "./ToolButton";

export default function ToolBar() {
        return (
        <div className="bg-light p-3 border-bottom">ToolBar
            <ToolButton text="SEARCH" onClick = {() => alert("Do SEARCH function")}/>
            <ToolButton text = "ADD"  onClick = {() => alert("Do ADD function")}/>
            <ToolButton text = "UPDATE"  onClick = {() => alert("Do UPDATE function")}/>
            <ToolButton text = "DELETE" onClick = {() => alert("Do DELETE function")}/>
            
        </div>
        )

}