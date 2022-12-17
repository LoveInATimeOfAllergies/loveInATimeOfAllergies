import { useState, useEffect } from "react"

const GuestList = ({ guest, userChoice }) => {
  const [filtered, setFiltered] = useState([]);
  // Options!!
    // When we click the dropdown for the party, we get the guest names and all their dietary restrictions (like how we started out)
      // This way we'd have to use each of the values on the newObject obj (aka gotta go .alcoholFree, .celeryFree, etc etc until .wheatFree and probably filter to remove nulls)
    // We display dietary restrictions along with the recipes as a side note - basically, onChange only shows names, onSubmit you get the "This group has the following restrictions" or w/e plus the recipe list
    // OR we figure out wtf is going wrong with our current code

  useEffect(() => {
    const finalGuestsArray = guest.map((guestObject) => {
      if (guestObject.partyKey === userChoice) {
        // const step1 = Object.entries(guestObject.newObject);
        // const step2 = step1.filter(([_, value]) => value != null)
        // const step3 = Object.fromEntries(step2);
        // console.log(step1);
        // console.log(step2);
        // console.log(step3);
        
        const noNulls = Object.fromEntries(Object.entries(guestObject.newObject).filter(([_, v]) => v != null))
        return noNulls
        // const filteredGuestRestrictions = (Object.values(guestObject.newObject)).filter(restriction => {
          //   return restriction != null;
          // })
          // filteredGuestRestrictions.shift();
          // console.log(filteredGuestRestrictions);
          // finalGuestsArray.push(filteredGuestRestrictions)
          // setFiltered(finalGuestsArray)
        } else {
          return null
        }
      })
      
      const lastTry = finalGuestsArray.filter(guestObj => {
        return guestObj != null;
      })
      setFiltered(lastTry);
  }, [userChoice, guest])
  
  const omitted = "key";

  return(
    <section>
      <ul className="partySummary">
        {
          filtered.map(data => (
            Object.keys(data).map(prop => (
              !omitted.includes(prop) && (
                <li>
                  <p>{data[prop]}</p>
                </li>
              )
            ))
          ))
        }
        {/* {guest.map((
          {partyKey, newObject: {alcoholFree, celeryFree, crustaceanFree, dairyFree, eggFree, fishFree, fodmapFree, glutenFree, key, kidneyFriendly, kosher, lupineFree, molluskFree, mustardFree, peanutFree, pescatarian, porkFree, redMeatFree, sesameFree, shellfishFree, soyFree, sulfiteFree, treeNutFree, user, vegan, vegetarian, wheatFree}}
        ) => {
            // Compares partyKey to selected party choice
            if (partyKey === userChoice) {
                return (
                  <li key={key} className="guestSummary">
                    <p>{user}</p>
                    <p>{alcoholFree}</p>
                    <p>{celeryFree}</p>
                    <p>{crustaceanFree}</p>
                    <p>{dairyFree}</p>
                    <p>{eggFree}</p>
                    <p>{fishFree}</p>
                    <p>{fodmapFree}</p>
                    <p>{glutenFree}</p>
                    <p>{kidneyFriendly}</p>
                    <p>{kosher}</p>
                    <p>{lupineFree}</p>
                    <p>{molluskFree}</p>
                    <p>{mustardFree}</p>
                    <p>{peanutFree}</p>
                    <p>{pescatarian}</p>
                    <p>{porkFree}</p>
                    <p>{redMeatFree}</p>
                    <p>{sesameFree}</p>
                    <p>{shellfishFree}</p>
                    <p>{soyFree}</p>
                    <p>{sulfiteFree}</p>
                    <p>{treeNutFree}</p>
                    <p>{vegan}</p>
                    <p>{vegetarian}</p>
                    <p>{wheatFree}</p>
                  </li>
                );
            } else {
              return null
            }
          })} */}
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