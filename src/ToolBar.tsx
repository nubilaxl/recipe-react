import ToolButton from "./ToolButton";

type ToolBarProps = {
    addNewRecipe: () => void
    handleDeleteToggleButtonClick: () => void
    toggleDelete: boolean
}

// This function shows the buttons on the toolbar and their onClick methods.
// The Delete button toggles text and shows / hides the X buttons in the sidebar.
export default function ToolBar({
        addNewRecipe,
        handleDeleteToggleButtonClick,
        toggleDelete
}: ToolBarProps) {
        return (
        <div className="bg-light p-3 border-bottom">ToolBar
            <ToolButton text="SEARCH" onClick = {() => alert("Do SEARCH function")}/>
            <ToolButton text = "ADD"  onClick = {addNewRecipe}/>
            <ToolButton text = "UPDATE"  onClick = {() => alert("Do UPDATE function")}/>
            <ToolButton text = {toggleDelete ? "HIDE DELETE" : "DELETE"} onClick = {handleDeleteToggleButtonClick}/>
            
        </div>
        )

}