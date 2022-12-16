const GuestList = ({ guest, userChoice }) => {
  // Options!!
    // When we click the dropdown for the party, we get the guest names and all their dietary restrictions (like how we started out)
      // This way we'd have to use each of the values on the newObject obj (aka gotta go .alcoholFree, .celeryFree, etc etc until .wheatFree and probably filter to remove nulls)
    // We display dietary restrictions along with the recipes as a side note - basically, onChange only shows names, onSubmit you get the "This group has the following restrictions" or w/e plus the recipe list
    // OR we figure out wtf is going wrong with our current code
  return(
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
                  </p>
                </li>
              );
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