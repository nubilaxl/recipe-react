import { useState } from "react";
import type { MealDB } from "./Data-types";
import RecipeForm from "./RecipeForm";
import ToolButton from "./ToolButton";
import {Modal} from "react-bootstrap"

type ToolBarProps = {
    addNewRecipe: () => void
    handleDeleteToggleButtonClick: () => void
    updateRecipe : (property: string, newValue: string, idToUpdate?: number) => void
    selectedRecipe?: MealDB
    toggleDelete: boolean
}

// This function shows the buttons on the toolbar and their onClick methods.
// The Delete button toggles text and shows / hides the X buttons in the sidebar.
export default function ToolBar({
        addNewRecipe,
        handleDeleteToggleButtonClick,
        updateRecipe,
        selectedRecipe,
        toggleDelete
}: ToolBarProps) {

        const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false)

        const handleRecipeClose = () => setIsRecipeModalOpen(false)

        return (
    <>
        <div className="bg-light p-3 border-bottom">ToolBar
            <ToolButton text="SEARCH" onClick = {() => alert("Do SEARCH function")}/>
            <ToolButton text = "ADD"  onClick = {addNewRecipe}/>
            <ToolButton text = "UPDATE"  onClick = {() => setIsRecipeModalOpen(true)}/>
            <ToolButton text = {toggleDelete ? "HIDE DELETE" : "DELETE"} onClick = {handleDeleteToggleButtonClick}/>
            
        </div>
        <Modal show={isRecipeModalOpen} onHide={() => setIsRecipeModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update New Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RecipeForm
                        updateRecipe={updateRecipe}
                        selectedRecipe={selectedRecipe}
                        handleClose={handleRecipeClose}
                    />
                </Modal.Body>
            </Modal>
    </>
        )
    
}