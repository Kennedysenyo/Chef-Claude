import { useState } from "react";

export default function Main() { 

  const [ingredients, setIngredients] = useState([]);
  const [textInput, setTextInput] = useState("")

  const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
 
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
          name="ingredient"
          value={textInput}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}