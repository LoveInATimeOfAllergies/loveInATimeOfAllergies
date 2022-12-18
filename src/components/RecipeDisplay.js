const RecipeDisplay = ({ recipes }) => {
  return (
    <section className="Recipe ">
      <ul className="recipeList wrapper">
        {recipes.map((recipeObject) => {
          return (
            <li className="individualRecipe" key={recipeObject.recipe.label}>
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
  );
};
export default RecipeDisplay;
