import app from "./firebase.js";
import { getDatabase, ref, onValue } from "firebase/database";
import Header from "./components/Header.js";
import PartyForm from "./components/PartyForm.js";
import Checkboxes from "./components/Checkboxes.js";
import Dropdown from "./components/Dropdown.js";
import GuestList from "./components/GuestList.js";
import RecipeDisplay from "./components/RecipeDisplay.js";
import Footer from "./components/Footer.js";
import { useEffect, useState } from "react";
import "./App.css";
import './components/FontAwesomeIcon.js'

//
function App() {
  // Bringing in firebase database to our component
  const database = getDatabase(app);
  const dbRef = ref(database);
  // Setting up states
  const [partyInput, setPartyInput] = useState("");

  //////// user-input states //////////////
  const [guest, setGuest] = useState([]);
  const [partyDataList, setPartyDataList] = useState([]);
  const [userChoice, setUserChoice] = useState("");

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
  }, [dbRef]);

  return (
    <div className="App">
      <Header />
      <main>

      
        <PartyForm
          partyInput={partyInput}
          setPartyInput={setPartyInput}
        />

        <Checkboxes
          partyInput={partyInput}
        />
        <section className="partyPreview">
        
          <Dropdown
            userChoice={userChoice}
            setUserChoice={setUserChoice}
            partyDataList={partyDataList}
            guest={guest}
            setRecipes={setRecipes}
          />
          
          <GuestList
            guest={guest}
            userChoice={userChoice}
          />
        </section>

        <RecipeDisplay
          recipes={recipes}
        />

      </main>
      <Footer />
    </div>
  );
}

export default App;
