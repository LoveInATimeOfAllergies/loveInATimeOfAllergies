const Dropdown = ({
  userChoice,
  partyDataList,
  guest,
  setRecipes,
  setUserChoice,
}) => {
  // We make a function here that updates on Change - so when the user chooses something from the dropdown, it creates the filtered array.

  // API Call
  // Consider what to do if user tries to submit the "show me recipes" button without choosing a party for error handling
  const callAPI = async (url) => {
    if (userChoice === "") {
      alert("Please select a party");
    } else {
      const recipeData = await fetch(url);
      const recipe = await recipeData.json();
      setRecipes(recipe.hits);
    }
  };
  // Constructing the endpont using filtered array (from filtered state)
  const constructEndpoint = (event) => {
    event.preventDefault();
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
      } else {
        return null;
      }
    });
    // Filter allergyArray for unique values and undefined
    let unique = [...new Set(allergyArray)];
    const filteredArray = unique.filter(
      (restriction) => restriction !== undefined
    );
    const merged = filteredArray.join("&health=");
    const url = new URL(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=fda19781&app_key=80eb03af50e7092c886828535d566860&mealType=dinner&random=true&health=${merged}`
    );
    console.log(url);
    callAPI(url);
  };

  return (
    <div class="dropdown">
      <h2>Party Select</h2>
      <form className="dropdownForm" onSubmit={constructEndpoint}>
        <fieldset>
          <legend>Select the party for which you wish to see recipe suggestions!</legend>
          <div>
            <label htmlFor="partyChoice">Choose your party</label>
            <select
              name="partyChoice"
              id="partyChoice"
              onChange={(e) => {
                setUserChoice(e.target.value);
              }}
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
          </div>
          <button className="btn">Show me recipes</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Dropdown;
