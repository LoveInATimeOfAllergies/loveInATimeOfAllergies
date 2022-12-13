import app from './firebase.js';
import { getDatabase, ref, onValue, push } from 'firebase/database';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Bringing in firebase database to our component
  const database = getDatabase(app);
  const dbRef = ref(database);
  // Setting up states
  const [partyInput, setPartyInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [dairyFree, setDairyFree] = useState(false);
  const [eggFree, setEggFree] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  //
  const [guest, setGuest] = useState([]);
  const [partyDataList, setPartyDataList] = useState([]);
  const [userChoice, setUserChoice] = useState('');  
  // const [allergyArray, setAllergyArray] = useState([]);  

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
            newObject:{
              key: newKey,
            user: nested[newKey].user,
            dairyFree: nested[newKey].dairyFree,
            eggFree: nested[newKey].eggFree,
            glutenFree: nested[newKey].glutenFree,
            }
          });
        }
      }
      setGuest(dataArray);
      setPartyDataList(partyDataArray);
    });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const childNodeRef = ref(database, `/${partyInput}`);
    const newUser = {
      user: nameInput,
      dairyFree: (dairyFree ? 'dairy-free' : null),
      eggFree: (eggFree ? 'egg-free' : null),
      glutenFree: (glutenFree ? 'gluten-free' : null)
      // allergy: allergyInput,
    };
    push(childNodeRef, newUser);

    // push(dbRef, userProfile)
    setNameInput('');
    // Specifically for the checkbox checkmarks to go away
    document.getElementById('dairyFree').checked = false;
    document.getElementById('eggFree').checked = false;
    document.getElementById('glutenFree').checked = false;
    // Specifically to change the states back to false
    setDairyFree(false);
    setEggFree(false);
    setGlutenFree(false);
  }

  const handleInputChangeParty = (event) => {
    setPartyInput(event.target.value);
  }

  // API Call Portion
  const callAPI = (event) => {
    event.preventDefault();

    // Grab all allergies from guest list and put into allergyArray
    const allergyArray = [];
    guest.map((allergyObject) => {
      if (allergyObject.partyKey === userChoice) {
        return (
          allergyArray.push(allergyObject.newObject.dairyFree, allergyObject.newObject.eggFree, allergyObject.newObject.glutenFree)
        )
      }
    })

    // Filter allergyArray for unique values and undefined
    let unique = [...new Set(allergyArray)];
    const filtered = unique.filter(restriction => restriction !== undefined);
    console.log(filtered); 
    const merged = filtered.join('&health=');
    console.log(merged);

    const url = new URL(`https://api.edamam.com/api/recipes/v2?type=public&app_id=fda19781&app_key=80eb03af50e7092c886828535d566860&mealType=dinner&health=${merged}`);
    
    console.log(url);
    const getRecipes = async () => {
        const recipeData = await fetch(url);
        const recipe = await recipeData.json();
        console.log(recipe.hits);
    }
    getRecipes();
  }

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
        <input type="text" id="nameField" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        
        <label htmlFor="dairyFree">Dairy-Free</label>
        <input type="checkbox" name="allergies" id="dairyFree" value={dairyFree} onChange={(e) => setDairyFree(e.target.checked)}/>

        <label htmlFor="eggFree">Egg-Free</label>
        <input type="checkbox" name="allergies" id="eggFree" value={eggFree} onChange={(e) => setEggFree(e.target.checked)}/>

        <label htmlFor="glutenFree">Gluten-Free</label>
        <input type="checkbox" name="allergies" id="glutenFree" value={glutenFree} onChange={(e) => setGlutenFree(e.target.checked)} />

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
        <select name="partyChoice" id="partyChoice" onChange={(e) => {setUserChoice(e.target.value)}} value={userChoice}>
          <option value="" disabled>Choose a party</option>
        {
          partyDataList.map((partyNumbers) => {
            return(
              <option value={partyNumbers}>{partyNumbers}</option>
            )
          })
        }
        </select>
        <button>Show me recipes</button>
      </form>

      {/* Party selector */}
      <section>
        <ul>
          {
            guest.map((guestObject) => {
              // Compares partyKey to selected party choice
              if (guestObject.partyKey === userChoice) {
                return (
                  <li key={guestObject.key}>
                    {/* {guestObject.partyKey} */}
                    <p>{guestObject.newObject.user} {guestObject.newObject.dairyFree} {guestObject.newObject.eggFree} {guestObject.newObject.glutenFree}</p>
                  </li>
                )
              }
            })
          }
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default App;
