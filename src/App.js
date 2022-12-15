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
  const [pescatarian, setPescatarian] = useState(false);
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
              alcoholFree: nested[newKey].alcoholFree,
              celeryFree: nested[newKey].celeryFree,
              crustaceanFree: nested[newKey].crustaceanFree,
              dairyFree: nested[newKey].dairyFree,
              eggFree: nested[newKey].eggFree,
              fishFree: nested[newKey].fishFree,
              fodmapFree: nested[newKey].fodmapFree,
              glutenFree: nested[newKey].glutenFree,
              kidneyFriendly: nested[newKey].kidneyFriendly,
              kosher: nested[newKey].kosher,
              lupineFree: nested[newKey].lupineFree,
              molluskFree: nested[newKey].molluskFree,
              mustardFree: nested[newKey].mustardFree,
              peanutFree: nested[newKey].peanutFree,
              pescatarian: nested[newKey].pescatarian,
              porkFree: nested[newKey].porkFree,
              redMeatFree: nested[newKey].redMeatFree,
              sesameFree: nested[newKey].sesameFree,
              shellfishFree: nested[newKey].shellfishFree,
              soyFree: nested[newKey].soyFree,
              sulfiteFree: nested[newKey].sulfiteFree,
              treeNutFree: nested[newKey].treeNutFree,
              vegan: nested[newKey].vegan,
              vegetarian: nested[newKey].vegetarian,
              wheatFree: nested[newKey].wheatFree,
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
      alcoholFree: alcoholFree ? "alcohol-free" : null,
      celeryFree: celeryFree ? "celery-free" : null,
      crustaceanFree: crustaceanFree ? "crustacean-free" : null,
      dairyFree: dairyFree ? "dairy-free" : null,
      eggFree: eggFree ? "egg-free" : null,
      fishFree: fishFree ? "fish-free" : null,
      fodmapFree: fodmapFree ? "fodmap-free" : null,
      glutenFree: glutenFree ? "gluten-free" : null,
      kidneyFriendly: kidneyFriendly ? "kidney-friendly" : null,
      kosher: kosher ? "kosher" : null,
      lupineFree: lupineFree ? "lupine-free" : null,
      molluskFree: molluskFree ? "mollusk-free" : null,
      mustardFree: mustardFree ? "mustard-free" : null,
      peanutFree: peanutFree ? "peanut-free" : null,
      pescatarian: pescatarian ? "pescatarian" : null,
      porkFree: porkFree ? "pork-free" : null,
      redMeatFree: redMeatFree ? "red-meat-free" : null,
      sesameFree: sesameFree ? "sesame-free" : null,
      shellfishFree: shellfishFree ? "shellfish-free" : null,
      soyFree: soyFree ? "soy-free" : null,
      sulfiteFree: sulfiteFree ? "sulfite-free" : null,
      treeNutFree: treeNutFree ? "tree-nut-free" : null,
      vegan: vegan ? "vegan" : null,
      vegetarian: vegetarian ? "vegetarian" : null,
      wheatFree: wheatFree ? "wheat-free" : null, 
    };
    push(childNodeRef, newUser);

    // push(dbRef, userProfile)
    setNameInput("");
    // Specifically for the checkbox checkmarks to go away
    document.getElementById("alcoholFree").checked = false;
    document.getElementById("celeryFree").checked = false;
    document.getElementById("crustaceanFree").checked = false;
    document.getElementById("dairyFree").checked = false;
    document.getElementById("eggFree").checked = false;
    document.getElementById("fishFree").checked = false;
    document.getElementById("fodmapFree").checked = false;
    document.getElementById("glutenFree").checked = false;
    document.getElementById("kidneyFriendly").checked = false;
    document.getElementById("kosher").checked = false;
    document.getElementById("lupineFree").checked = false;
    document.getElementById("molluskFree").checked = false;
    document.getElementById("mustardFree").checked = false;
    document.getElementById("peanutFree").checked = false;
    document.getElementById("pescatarian").checked = false;
    document.getElementById("porkFree").checked = false;
    document.getElementById("redMeatFree").checked = false;
    document.getElementById("sesameFree").checked = false;
    document.getElementById("shellfishFree").checked = false;
    document.getElementById("soyFree").checked = false;
    document.getElementById("sulfiteFree").checked = false;
    document.getElementById("treeNutFree").checked = false;
    document.getElementById("vegan").checked = false;
    document.getElementById("vegetarian").checked = false;
    document.getElementById("wheatFree").checked = false;
    // Specifically to change the states back to false
    setAlcholFree(false)
    setCeleryFree(false);
    setCrustaceanFree(false);
    setDairyFree(false);
    setEggFree(false);
    setFishFree(false);
    setFodmapFree(false);
    setGlutenFree(false);
    setKidneyFriendly(false);
    setKosher(false);
    setLupineFree(false);
    setMolluskFree(false);
    setMustardFree(false);
    setPeanutFree(false);
    setPescatarian(false);
    setPorkFree(false);
    setRedMeatFree(false);
    setSesameFree(false);
    setShellFishFree(false);
    setSoyFree(false);
    setSulfiteFree(false);
    setTreeNutFree(false);
    setVegan(false);
    setVegetarian(false);
    setWheatFree(false);
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

        <label htmlFor="pescatarian">Pescatarian</label>
        <input
          type="checkbox"
          name="allergies"
          id="pescatarian"
          value={pescatarian}
          onChange={(e) => setPescatarian(e.target.checked)}
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
