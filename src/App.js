import app from "./firebase.js";
import { getDatabase, ref, onValue, push } from "firebase/database";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Bringing in firebase database to our component
  const database = getDatabase(app);
  const dbRef = ref(database);
  // Setting up states
  const [partyInput, setPartyInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  /////// checkboxes ///////
  const [alcoholFree, setAlcholFree] = useState(false);
  const [celeryFree, setCeleryFree] = useState(false);
  const [crustaceanFree, setCrustaceanFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [eggFree, setEggFree] = useState(false);
  const [fishFree, setFishFree] = useState(false);
  const [fodmapFree, setFodmapFree] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [kidneyFriendly, setKidneyFriendly] = useState(false);
  const [kosher, setKosher] = useState(false);
  const [lupineFree, setLupineFree] = useState(false);
  const [molluskFree, setMolluskFree] = useState(false);
  const [mustardFree, setMustardFree] = useState(false);
  const [peanutFree, setPeanutFree] = useState(false);
  const [pecatarian, setPecatarian] = useState(false);
  const [porkFree, setPorkFree] = useState(false);
  const [redMeatFree, setRedMeatFree] = useState(false);
  const [sesameFree, setSesameFree] = useState(false);
  const [shellfishFree, setShellFishFree] = useState(false);
  const [soyFree, setSoyFree] = useState(false);
  const [sulfiteFree, setSulfiteFree] = useState(false);
  const [treeNutFree, setTreeNutFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [wheatFree, setWheatFree] = useState(false);

  //////// user-input states //////////////
  const [guest, setGuest] = useState([]);
  const [partyDataList, setPartyDataList] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  // const [allergyArray, setAllergyArray] = useState([]);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    onValue(dbRef, (response) => {
      const partyData = response.val();
      const dataArray = [];
      const partyDataArray = Object.keys(partyData);

      // grabs the first object
      for (let key in partyData) {
        //grabs the nested/second object
        const nested = partyData[key];
        for (let newKey in nested) {
          dataArray.push({
            partyKey: key,
            newObject: {
              key: newKey,
              user: nested[newKey].user,
              dairyFree: nested[newKey].dairyFree,
              eggFree: nested[newKey].eggFree,
              glutenFree: nested[newKey].glutenFree,
            },
          });
        }
      }
      setGuest(dataArray);
      setPartyDataList(partyDataArray);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const childNodeRef = ref(database, `/${partyInput}`);
    const newUser = {
      user: nameInput,
      dairyFree: dairyFree ? "dairy-free" : null,
      eggFree: eggFree ? "egg-free" : null,
      glutenFree: glutenFree ? "gluten-free" : null,
      // allergy: allergyInput,
    };
    push(childNodeRef, newUser);

    // push(dbRef, userProfile)
    setNameInput("");
    // Specifically for the checkbox checkmarks to go away
    document.getElementById("dairyFree").checked = false;
    document.getElementById("eggFree").checked = false;
    document.getElementById("glutenFree").checked = false;
    // Specifically to change the states back to false
    setDairyFree(false);
    setEggFree(false);
    setGlutenFree(false);
  };

  const handleInputChangeParty = (event) => {
    setPartyInput(event.target.value);
  };

  // API Call Portion
  const callAPI = (event) => {
    event.preventDefault();

    // Grab all allergies from guest list and put into allergyArray
    const allergyArray = [];
    guest.map((allergyObject) => {
      if (allergyObject.partyKey === userChoice) {
        return allergyArray.push(
          allergyObject.newObject.dairyFree,
          allergyObject.newObject.eggFree,
          allergyObject.newObject.glutenFree
        );
      }
    });

    // Filter allergyArray for unique values and undefined
    let unique = [...new Set(allergyArray)];
    const filtered = unique.filter((restriction) => restriction !== undefined);
    console.log(filtered);
    const merged = filtered.join("&health=");
    console.log(merged);

    const url = new URL(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=fda19781&app_key=80eb03af50e7092c886828535d566860&mealType=dinner&random=true&health=${merged}`
    );

    console.log(url);
    const getRecipes = async () => {
      const recipeData = await fetch(url);
      const recipe = await recipeData.json();
      console.log(recipe.hits);
      setRecipes(recipe.hits);
    };
    getRecipes();
  };

  return (
    <div className="App">
      <Header />
      {/* Party submit */}
      <form action="submit">
        <label htmlFor="newParty">Add Party </label>
        {/* CSS text-transform: capitalize? */}
        <input
          type="text"
          id="party"
          onChange={handleInputChangeParty}
          value={partyInput}
        />
      </form>
      {/* Guest name and dietary restrictions submit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameField">Guest name:</label>
        <input
          type="text"
          id="nameField"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label htmlFor="dairyFree">Dairy-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="dairyFree"
          value={dairyFree}
          onChange={(e) => setDairyFree(e.target.checked)}
        />

        <label htmlFor="eggFree">Egg-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="eggFree"
          value={eggFree}
          onChange={(e) => setEggFree(e.target.checked)}
        />

        <label htmlFor="glutenFree">Gluten-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="glutenFree"
          value={glutenFree}
          onChange={(e) => setGlutenFree(e.target.checked)}
        />

        <label htmlFor="alcoholFree">Alcohol-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="alcoholFree"
          value={alcoholFree}
          onChange={(e) => setAlcholFree(e.target.checked)}
        />

        <label htmlFor="celeryFree">Celery-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="celeryFree"
          value={celeryFree}
          onChange={(e) => setCeleryFree(e.target.checked)}
        />

        <label htmlFor="crustaceanFree">Crustcean-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="crustaceanFree"
          value={crustaceanFree}
          onChange={(e) => setCrustaceanFree(e.target.checked)}
        />

        <label htmlFor="fishFree">Fish-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="fishFree"
          value={fishFree}
          onChange={(e) => setFishFree(e.target.checked)}
        />

        <label htmlFor="fodmapFree">FODMAP-Free </label>
        <input
          type="checkbox"
          name="allergies"
          id="fodmapFree"
          value={fodmapFree}
          onChange={(e) => setFodmapFree(e.target.checked)}
        />

        <label htmlFor="kidneyFriendly">Kidney-Friendly</label>
        <input
          type="checkbox"
          name="allergies"
          id="kidneyFriendly"
          value={kidneyFriendly}
          onChange={(e) => setKidneyFriendly(e.target.checked)}
        />

        <label htmlFor="kosher">Kosher</label>
        <input
          type="checkbox"
          name="allergies"
          id="kosher"
          value={kosher}
          onChange={(e) => setKosher(e.target.checked)}
        />

        <label htmlFor="lupineFree">Lupine-Free </label>
        <input
          type="checkbox"
          name="allergies"
          id="lupineFree"
          value={lupineFree}
          onChange={(e) => setLupineFree(e.target.checked)}
        />

        <label htmlFor="molluskFree">Mollusk-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="molluskFree"
          value={molluskFree}
          onChange={(e) => setMolluskFree(e.target.checked)}
        />

        <label htmlFor="mustardFree">Mustard-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="mustardFree"
          value={mustardFree}
          onChange={(e) => setMustardFree(e.target.checked)}
        />

        <label htmlFor="peanutFree">Peanut-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="peanutFree"
          value={peanutFree}
          onChange={(e) => setPeanutFree(e.target.checked)}
        />

        <label htmlFor="pecatarian">Pescatarian</label>
        <input
          type="checkbox"
          name="allergies"
          id="pecatarian"
          value={pecatarian}
          onChange={(e) => setPecatarian(e.target.checked)}
        />

        <label htmlFor="porkFree">Pork-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="porkFree"
          value={porkFree}
          onChange={(e) => setPorkFree(e.target.checked)}
        />

        <label htmlFor="redMeatFree">Red-Meat-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="redMeatFree"
          value={redMeatFree}
          onChange={(e) => setRedMeatFree(e.target.checked)}
        />

        <label htmlFor="sesameFree">Sesame-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="sesameFree"
          value={sesameFree}
          onChange={(e) => setSesameFree(e.target.checked)}
        />

        <label htmlFor="shellfishFree">Shellfish-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="shellfishFree"
          value={shellfishFree}
          onChange={(e) => setShellFishFree(e.target.checked)}
        />

        <label htmlFor="soyFree">Soy-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="soyFree"
          value={soyFree}
          onChange={(e) => setSoyFree(e.target.checked)}
        />

        <label htmlFor="sulfiteFree">Sulfite-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="sulfiteFree"
          value={sulfiteFree}
          onChange={(e) => setSulfiteFree(e.target.checked)}
        />

        <label htmlFor="treeNutFree">Tree-Nut-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="treeNutFree"
          value={treeNutFree}
          onChange={(e) => setTreeNutFree(e.target.checked)}
        />

        <label htmlFor="vegan">Vegan</label>
        <input
          type="checkbox"
          name="allergies"
          id="vegan"
          value={vegan}
          onChange={(e) => setVegan(e.target.checked)}
        />

        <label htmlFor="vegetarian">Vegetarian</label>
        <input
          type="checkbox"
          name="allergies"
          id="vegetarian"
          value={vegetarian}
          onChange={(e) => setVegetarian(e.target.checked)}
        />

        <label htmlFor="wheatFree">Wheat-Free</label>
        <input
          type="checkbox"
          name="allergies"
          id="wheatFree"
          value={wheatFree}
          onChange={(e) => setWheatFree(e.target.checked)}
        />

        <button>Submit</button>
      </form>

      {/* Party Profile First */}
      {/* We already have the party as the node of all the data */}
      {/* No need for a dropdown because all of the guests entered are already associated with this party */}
      {/* A page that displays the guests and does the API call with whatever dark magic we use to get the right endpoint */}
      {/* Displays */}
      {/* Easier overall - but users have to be entered multiple times if they go to multiple parties */}
      {/* Only thing to consider is how to push the data up for multiple guests going to the same party */}

      {/* Form */}
      <form onSubmit={callAPI}>
        <label htmlFor="partyChoice">Select Here:</label>
        {/* onChange, store user choice in stateful variable to use in if statement */}
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
        <button>Show me recipes</button>
      </form>

      {/* Party selector */}
      <section>
        <ul>
          {guest.map((guestObject) => {
            // Compares partyKey to selected party choice
            if (guestObject.partyKey === userChoice) {
              return (
                <li key={guestObject.newObject.key}>
                  {/* {guestObject.partyKey} */}
                  <p>
                    {guestObject.newObject.user}{" "}
                    {guestObject.newObject.dairyFree}{" "}
                    {guestObject.newObject.eggFree}{" "}
                    {guestObject.newObject.glutenFree}
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </section>

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

      <Footer />
    </div>
  );
}

export default App;
