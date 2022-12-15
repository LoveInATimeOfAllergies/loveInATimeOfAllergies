const Dropdown = ({ userChoice, partyDataList, guest, setRecipes, setUserChoice, filtered, setFiltered }) => {
  
// We make a function here that updates on Change - so when the user chooses something from the dropdown, it creates the filtered array.
  
  const createFilteredArray = () => {
    // Grab all allergies from guest list and put into allergyArray
    const allergyArray = [];
    guest.map((allergyObject) => {
      if (allergyObject.partyKey === userChoice) {
        return allergyArray.push(
          allergyObject.newObject.alcoholFree,
          allergyObject.newObject.celeryFree,
          allergyObject.newObject.crustaceanFree,
          allergyObject.newObject.dairyFree,
          allergyObject.newObject.eggFree,
          allergyObject.newObject.fishFree,
          allergyObject.newObject.fodmapFree,
          allergyObject.newObject.glutenFree,
          allergyObject.newObject.kidneyFree,
          allergyObject.newObject.kosher,
          allergyObject.newObject.lupineFree,
          allergyObject.newObject.molluskFree,
          allergyObject.newObject.mustardFree,
          allergyObject.newObject.peanutFree,
          allergyObject.newObject.pescatarian,
          allergyObject.newObject.porkFree,
          allergyObject.newObject.redMeatFree,
          allergyObject.newObject.sesameFree,
          allergyObject.newObject.shellfishFree,
          allergyObject.newObject.soyFree,
          allergyObject.newObject.sulfiteFree,
          allergyObject.newObject.treeNutFree,
          allergyObject.newObject.vegan,
          allergyObject.newObject.vegetarian,
          allergyObject.newObject.wheatFree
        );
      }
    });
    // Filter allergyArray for unique values and undefined
    let unique = [...new Set(allergyArray)];
    const filteredArray = unique.filter((restriction) => restriction !== undefined);
    // console.log(filtered);
    setFiltered(filteredArray)
  }

  // API Call 
  const callAPI = async (url) => {
    const recipeData = await fetch(url);
    const recipe = await recipeData.json();
    console.log(recipe.hits);
    setRecipes(recipe.hits);
  };
  // Constructing the endpont using filtered array (from filtered state)
  const constructEndpoint = (event) => {
    event.preventDefault();
    const merged = filtered.join("&health=");

    const url = new URL(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=fda19781&app_key=80eb03af50e7092c886828535d566860&mealType=dinner&random=true&health=${merged}`
    );
    console.log(url);
    callAPI(url);
  };
  
    return(
      <form
        onSubmit={constructEndpoint}
        onChange={createFilteredArray}
      >
        <label htmlFor="partyChoice">Select Here:</label>
        {/* onChange, store user choice in stateful variable to use in if statement */}
        <select
          name="partyChoice"
          id="partyChoice"
          onChange={(e) => {setUserChoice(e.target.value)}}
          value={userChoice}
        >
          <option value="" disabled>
            Choose a party
          </option>
          {partyDataList.map((partyNumbers) => {
            return (
              <option value={partyNumbers} key={partyNumbers}>
                {partyNumbers}
              </option>
            );
          })}
        </select>
        <button>Show me recipes</button>
      </form>
  )
}
export default Dropdown;