const RecipeDisplay = ({recipes}) => {
  return(
    <section className="Recipe">
        <ul>
          {recipes.map((recipeObject) => {
            return (
              <li key={recipeObject.recipe.label}>
                <a href={recipeObject.recipe.url}>
                  <img
                    src={recipeObject.recipe.image}
                    alt={recipeObject.recipe.label}
                  />
                  <p>{recipeObject.recipe.label}</p>
                </a>
              </li>
            );
          })}
        </ul>
    </section>
  )
}
export default RecipeDisplay;