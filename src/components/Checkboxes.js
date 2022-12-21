import { useState } from "react";
import app from "../firebase.js";
import { getDatabase, ref, push } from "firebase/database";

const Checkboxes = (props) => {
  const database = getDatabase(app);

  const [nameInput, setNameInput] = useState("");
  /////// checkboxes ///////
  const [userProfile, setUserProfile] = useState({
    alcoholFree: false,
    celeryFree: false,
    crustaceanFree: false,
    dairyFree: false,
    eggFree: false,
    fishFree: false,
    fodmapFree: false,
    glutenFree: false,
    kidneyFriendly: false,
    kosher: false,
    lupineFree: false,
    molluskFree: false,
    mustardFree: false,
    peanutFree: false,
    pescatarian: false,
    porkFree: false,
    redMeatFree: false,
    sesameFree: false,
    shellfishFree: false,
    soyFree: false,
    sulfiteFree: false,
    treeNutFree: false,
    vegan: false,
    vegetarian: false,
    wheatFree: false
  })

  const handleChange = (e) => {
    setUserProfile({...userProfile, [e.target.name]: e.target.checked})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // blanks equal a falsy which we need to reverse to true to run the if statement
    if (!props.partyInput.trim()) {
      alert("Add a party");
    } 
    else if (!nameInput.trim()) {
      alert("Add a guest");
    }
    else {
      const childNodeRef = ref(database, `/${props.partyInput}`);
      const newUser = {
        user: nameInput,
        alcoholFree: userProfile.alcoholFree ? "alcohol-free" : null,
        celeryFree: userProfile.celeryFree ? "celery-free" : null,
        crustaceanFree: userProfile.crustaceanFree ? "crustacean-free" : null,
        dairyFree: userProfile.dairyFree ? "dairy-free" : null,
        eggFree: userProfile.eggFree ? "egg-free" : null,
        fishFree: userProfile.fishFree ? "fish-free" : null,
        fodmapFree: userProfile.fodmapFree ? "fodmap-free" : null,
        glutenFree: userProfile.glutenFree ? "gluten-free" : null,
        kidneyFriendly: userProfile.kidneyFriendly ? "kidney-friendly" : null,
        kosher: userProfile.kosher ? "kosher" : null,
        lupineFree: userProfile.lupineFree ? "lupine-free" : null,
        molluskFree: userProfile.molluskFree ? "mollusk-free" : null,
        mustardFree: userProfile.mustardFree ? "mustard-free" : null,
        peanutFree: userProfile.peanutFree ? "peanut-free" : null,
        pescatarian: userProfile.pescatarian ? "pescatarian" : null,
        porkFree: userProfile.porkFree ? "pork-free" : null,
        redMeatFree: userProfile.redMeatFree ? "red-meat-free" : null,
        sesameFree: userProfile.sesameFree ? "sesame-free" : null,
        shellfishFree: userProfile.shellfishFree ? "shellfish-free" : null,
        soyFree: userProfile.soyFree ? "soy-free" : null,
        sulfiteFree: userProfile.sulfiteFree ? "sulfite-free" : null,
        treeNutFree: userProfile.treeNutFree ? "tree-nut-free" : null,
        vegan: userProfile.vegan ? "vegan" : null,
        vegetarian: userProfile.vegetarian ? "vegetarian" : null,
        wheatFree: userProfile.wheatFree ? "wheat-free" : null,
      };
      push(childNodeRef, newUser);

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
      setUserProfile({
        alcoholFree: false,
        celeryFree: false,
        crustaceanFree: false,
        dairyFree: false,
        eggFree: false,
        fishFree: false,
        fodmapFree: false,
        glutenFree: false,
        kidneyFriendly: false,
        kosher: false,
        lupineFree: false,
        molluskFree: false,
        mustardFree: false,
        peanutFree: false,
        pescatarian: false,
        porkFree: false,
        redMeatFree: false,
        sesameFree: false,
        shellfishFree: false,
        soyFree: false,
        sulfiteFree: false,
        treeNutFree: false,
        vegan: false,
        vegetarian: false,
        wheatFree: false
      })
    }
  };

  return (
    <div className="checkBoxContainer">
      <div className="wrapper">
      <form onSubmit={handleSubmit} className="guestForm">
        <div className="guestNameBox">
          <label htmlFor="nameField">Guest Name: </label>
          <input
            type="text"
            id="nameField"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="John Smith"
          />
          </div>

          <div className="checkboxes">
            <label htmlFor="alcoholFree">
              <input
                type="checkbox"
                name="alcoholFree"
                id="alcoholFree"
                value={userProfile.alcoholFree}
                onChange={handleChange}
              />
              Alcohol-Free
            </label>

            <label htmlFor="celeryFree">
              <input
                type="checkbox"
                name="celeryFree"
                id="celeryFree"
                value={userProfile.celeryFree}
                onChange={handleChange}
              />
              Celery-Free
            </label>

            <label htmlFor="crustaceanFree">
              <input
                type="checkbox"
                name="crustaceanFree"
                id="crustaceanFree"
                value={userProfile.crustaceanFree}
                onChange={handleChange}
              />
              Crustacean-Free
            </label>

            <label htmlFor="dairyFree">
              <input
                type="checkbox"
                name="dairyFree"
                id="dairyFree"
                value={userProfile.dairyFree}
                onChange={handleChange}
              />
              Dairy-Free
            </label>

            <label htmlFor="eggFree">
              <input
                type="checkbox"
                name="eggFree"
                id="eggFree"
                value={userProfile.eggFree}
                onChange={handleChange}
              />
              Egg-Free
            </label>

            <label htmlFor="fishFree">
              <input
                type="checkbox"
                name="fishFree"
                id="fishFree"
                value={userProfile.fishFree}
                onChange={handleChange}
              />
              Fish-Free
            </label>

            <label htmlFor="fodmapFree">
              <input
                type="checkbox"
                name="fodmapFree"
                id="fodmapFree"
                value={userProfile.fodmapFree}
                onChange={handleChange}
              />
              FODMAP-Free
            </label>

            <label htmlFor="glutenFree">
              <input
                type="checkbox"
                name="glutenFree"
                id="glutenFree"
                value={userProfile.glutenFree}
                onChange={handleChange}
              />
              Gluten-Free
            </label>

            <label htmlFor="kidneyFriendly">
              <input
                type="checkbox"
                name="kidneyFriendly"
                id="kidneyFriendly"
                value={userProfile.kidneyFriendly}
                onChange={handleChange}
              />
              Kidney-Friendly
            </label>

            <label htmlFor="kosher">
              <input
                type="checkbox"
                name="kosher"
                id="kosher"
                value={userProfile.kosher}
                onChange={handleChange}
              />
              Kosher
            </label>

            <label htmlFor="lupineFree">
              <input
                type="checkbox"
                name="lupineFree"
                id="lupineFree"
                value={userProfile.lupineFree}
                onChange={handleChange}
              />
              Lupine-Free
            </label>

            <label htmlFor="molluskFree">
              <input
                type="checkbox"
                name="molluskFree"
                id="molluskFree"
                value={userProfile.molluskFree}
                onChange={handleChange}
              />
              Mollusk-Free
            </label>

            <label htmlFor="mustardFree">
              <input
                type="checkbox"
                name="mustardFree"
                id="mustardFree"
                value={userProfile.mustardFree}
                onChange={handleChange}
              />
              Mustard-Free
            </label>

            <label htmlFor="peanutFree">
              <input
                type="checkbox"
                name="peanutFree"
                id="peanutFree"
                value={userProfile.peanutFree}
                onChange={handleChange}
              />
              Peanut-Free
            </label>

            <label htmlFor="pescatarian">
              <input
                type="checkbox"
                name="pescatarian"
                id="pescatarian"
                value={userProfile.pescatarian}
                onChange={handleChange}
              />
              Pescatarian
            </label>

            <label htmlFor="porkFree">
              <input
                type="checkbox"
                name="porkFree"
                id="porkFree"
                value={userProfile.porkFree}
                onChange={handleChange}
              />
              Pork-Free
            </label>

            <label htmlFor="redMeatFree">
              <input
                type="checkbox"
                name="redMeatFree"
                id="redMeatFree"
                value={userProfile.redMeatFree}
                onChange={handleChange}
              />
              Red-Meat-Free
            </label>

            <label htmlFor="sesameFree">
              <input
                type="checkbox"
                name="sesameFree"
                id="sesameFree"
                value={userProfile.sesameFree}
                onChange={handleChange}
              />
              Sesame-Free
            </label>

            <label htmlFor="shellfishFree">
              <input
                type="checkbox"
                name="shellfishFree"
                id="shellfishFree"
                value={userProfile.shellfishFree}
                onChange={handleChange}
              />
              Shellfish-Free
            </label>

            <label htmlFor="soyFree">
              <input
                type="checkbox"
                name="soyFree"
                id="soyFree"
                value={userProfile.soyFree}
                onChange={handleChange}
              />
              Soy-Free
            </label>

            <label htmlFor="sulfiteFree">
              <input
                type="checkbox"
                name="sulfiteFree"
                id="sulfiteFree"
                value={userProfile.sulfiteFree}
                onChange={handleChange}
              />
              Sulfite-Free
            </label>

            <label htmlFor="treeNutFree">
              <input
                type="checkbox"
                name="treeNutFree"
                id="treeNutFree"
                value={userProfile.treeNutFree}
                onChange={handleChange}
              />
              Tree-Nut-Free
            </label>

            <label htmlFor="vegan">
              <input
                type="checkbox"
                name="vegan"
                id="vegan"
                value={userProfile.vegan}
                onChange={handleChange}
              />
              Vegan
            </label>

            <label htmlFor="vegetarian">
              <input
                type="checkbox"
                name="vegetarian"
                id="vegetarian"
                value={userProfile.vegetarian}
                onChange={handleChange}
              />
              Vegetarian
            </label>

            <label htmlFor="wheatFree">
              <input
                type="checkbox"
                name="wheatFree"
                id="wheatFree"
                value={userProfile.wheatFree}
                onChange={handleChange}
              />
              Wheat-Free
            </label>
          </div>

          <div className="buttonContainer">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
      <div className="wave waveForms">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
      </div> {/* END .wave */}
    </div> 
  );
};
export default Checkboxes;
