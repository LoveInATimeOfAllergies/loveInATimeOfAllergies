import { useState } from "react";
import app from "../firebase.js";
import { getDatabase, ref, push } from "firebase/database";

const Checkboxes = (props) => {
  const database = getDatabase(app);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // blanks equal a falsy which we need to reverse to true to run the if statement
    if (!props.partyInput.trim()) {
      alert("add a party");
    } else {
      const childNodeRef = ref(database, `/${props.partyInput}`);
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
      setAlcholFree(false);
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
    }
  };

  return (
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
  );
};
export default Checkboxes;
