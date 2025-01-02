import { useState, useRef, useEffect } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";


export default function Main() { 

  const [ingredients, setIngredients] = useState([ "chicken", "all the main spices", "heavy cream", "pasta" ]);
  const [textInput, setTextInput] = useState("");
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView()
    }
  }, [recipe])

  async function getRecipe() {
    let recipeMarkdown = await getRecipeFromMistral(ingredients)
  
    setRecipe(recipeMarkdown);
    
  }

 

  // Handle Form input.
  const handleChange = (event) => {
    setTextInput(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    (textInput.trim() !== "") && setIngredients( prevIngredients => [...prevIngredients, textInput])
    setTextInput("")
  }
  
  return (
    <main>
      <form className="add-ingredient-form" method="POST">
        <input 
          type="text"
          placeholder="e.g. oregeno"
          aria-label="Add ingredient" 
          name="ingredien"
          value={textInput}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">Add ingredient</button>
      </form>

      { ingredients.length > 0 && 
          <IngredientsList 
            handleClick={getRecipe} 
            ingredients={ingredients} 
            ref={recipeSection}
          /> 
      }
      
      { recipe && <ClaudeRecipe recipe={recipe} /> }
      
    </main>
  )
}