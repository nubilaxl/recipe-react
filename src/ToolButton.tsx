//This function uses the text and onClick props to build out the buttons 
export default function ToolButton( {text, onClick}:
                             {text: string, onClick:() => void}  ) {
    return (<button type="button" className="btn btn-outline-secondary me-2"
            onClick={onClick}>
                
                    {text}
            </button>

            )
}