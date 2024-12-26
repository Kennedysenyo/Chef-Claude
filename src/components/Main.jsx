export default function() {
  return (
    <main>
      <form className="add-ingredient-form" action="" method="POST">
        <input 
          type="text"
          placeholder="e.g. oregeno"
          aria-label="Add ingredient" 
        />
        <button type="submit">Add ingredient</button>
      </form>
    </main>
  )
}