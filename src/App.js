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
  const [nameInput, setNameInput] = useState('')
  const [dairyFree, setDairyFree] = useState(false);
  const [eggFree, setEggFree] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const userProfile = {
      name: nameInput, 
      dairyFree: (dairyFree ? 'dairy-free' : null),
      eggFree: (eggFree ? 'egg-free' : null),
      glutenFree: (glutenFree ? 'gluten-free' : null)
      // 'dairy-free': dairyFree,
      // 'egg-free': eggFree,
      // 'gluten-free': glutenFree
    }
    push(dbRef, userProfile)
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

  return (
    <div className="App">
      <Header />
      {/* Form component */}
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
        <button>Show me recipes</button>
      </form>
      {/* Guest Profile First */}
      {/* Another component for the API call/party grouping */}
      {/* Form with a dropdown and a submit button. The dropdown is populated from firebase objects' 'name' property.  */}
      {/* User would select an option and hit submit */}
      {/* On submit, that name gets added to a list / array - the firebase object with the name and the allergies gets pushed into an empty array */}
      {/* Another button for when they're done adding all people ??? */}
      {/* Loop through the array to get the restrictions */}
      {/* Do whatever the process will be to get those into the api endpoint, call api, display data */}
      {/* The party doesn't really become a property of the object that is stored in firebase - unless we go for stretch goal gallery */}

      {/* Party Profile First */}
      {/* We already have the party as the node of all the data */}
      {/* No need for a dropdown because all of the guests entered are already associated with this party */}
      {/* A page that displays the guests and does the API call with whatever dark magic we use to get the right endpoint */}
      {/* Displays */}
      {/* Easier overall - but users have to be entered multiple times if they go to multiple parties */}
      {/* Only thing to consider is how to push the data up for multiple guests going to the same party */}

      <section>

      </section>
      <Footer />
    </div>
  );
}

export default App;
