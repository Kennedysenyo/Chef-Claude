import { useState } from "react";
import ClaudeRecipe from "./Recipe";
import IngredientsList from "./Ingredients";

export default function Main() { 

  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
  const [textInput, setTextInput] = useState("");
  const [recipeShown, setRecipeShown] = useState(false);

 
 
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

      { ingredients.length > 0 && <IngredientsList setRecipeShown={setRecipeShown} ingredients={ingredients} /> }
      
      { recipeShown && <ClaudeRecipe  /> }
      
    </main>
  )
}