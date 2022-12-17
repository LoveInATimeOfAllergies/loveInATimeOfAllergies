// import { useState, useEffect } from "react"

const GuestList = ({ guest, userChoice }) => {
  // const [filtered, setFiltered] = useState([]);
  // Options!!
    // When we click the dropdown for the party, we get the guest names and all their dietary restrictions (like how we started out)
      // This way we'd have to use each of the values on the newObject obj (aka gotta go .alcoholFree, .celeryFree, etc etc until .wheatFree and probably filter to remove nulls)
    // We display dietary restrictions along with the recipes as a side note - basically, onChange only shows names, onSubmit you get the "This group has the following restrictions" or w/e plus the recipe list
    // OR we figure out wtf is going wrong with our current code

  return (
    
    <section>
      <h3>Guests in this Party:</h3>
      <ul className="partySummary">
        
        {guest.map((
          {partyKey, newObject: {alcoholFree, celeryFree, crustaceanFree, dairyFree, eggFree, fishFree, fodmapFree, glutenFree, key, kidneyFriendly, kosher, lupineFree, molluskFree, mustardFree, peanutFree, pescatarian, porkFree, redMeatFree, sesameFree, shellfishFree, soyFree, sulfiteFree, treeNutFree, user, vegan, vegetarian, wheatFree}}
        ) => {
            // Compares partyKey to selected party choice
            if (partyKey === userChoice) {
                return (
                  <li key={key} className="guestSummary"> 
                    <p className="guestSummaryName">{user}</p>
                    <p className="guestSummaryRestrictions">
                      {alcoholFree} {celeryFree} {crustaceanFree} {dairyFree} {eggFree} {fishFree} {fodmapFree} {glutenFree} {kidneyFriendly} {kosher} {lupineFree} {molluskFree} {mustardFree} {peanutFree} {pescatarian} {porkFree} {redMeatFree} {sesameFree} {shellfishFree} {soyFree} {sulfiteFree} {treeNutFree} {vegan} {vegetarian} {wheatFree}
                    </p>
                  </li>
                );
            } else {
              return null
            }
          })}
      </ul>
    

      {/* {
        (userChoice ?
          <>
            <p>This party's dietary restrictions are</p>
            {filtered.map((restrictionName) => {
              return (
                <p>{restrictionName}</p>
              )
            })}
          </>
          : null)
      } */}
      </section>
  )
}
export default GuestList;