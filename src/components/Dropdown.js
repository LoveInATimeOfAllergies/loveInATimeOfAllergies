import GuestList from './GuestList.js';

const Dropdown = ({
  userChoice,
  partyDataList,
  guest,
  setRecipes,
  setUserChoice,
}) => {

  // API Call
  const callAPI = async (url) => {
    if (userChoice === "") {
      alert("Please select a party");
    } else {
      const recipeData = await fetch(url);
      const recipe = await recipeData.json();
      setRecipes(recipe.hits);
    }
  };

  // Constructing the endpont using filtered array
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
    // Default URL for party without dietary restrictions
    let url = new URL(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=fda19781&app_key=80eb03af50e7092c886828535d566860&mealType=dinner&random=true`
    );
    // URL for party with dietary restrictions
    if (filteredArray.length > 0) {
      const merged = filteredArray.join("&health=");
      url = new URL(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=fda19781&app_key=80eb03af50e7092c886828535d566860&mealType=dinner&random=true&health=${merged}`
      );
    }
    callAPI(url);
  };

  return (
    <>
      <div className="dropdown wrapper">
        <h2>Step 2: Select Your Party</h2>
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
            <GuestList
              guest={guest}
              userChoice={userChoice}
            />
            <button className="btn">Show me recipes</button>
          </fieldset>
        </form>
      </div>
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div> {/**END .wave */}
    </>
  );
};
export default Dropdown;
