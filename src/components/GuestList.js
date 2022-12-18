import GuestListNames from './GuestListNames.js';
import GuestListRestrictions from './GuestListRestrictions';

const GuestList = ({ guest, userChoice }) => {
  // const [filtered, setFiltered] = useState([]);
  // Options!!
    // When we click the dropdown for the party, we get the guest names and all their dietary restrictions (like how we started out)
      // This way we'd have to use each of the values on the newObject obj (aka gotta go .alcoholFree, .celeryFree, etc etc until .wheatFree and probably filter to remove nulls)
    // We display dietary restrictions along with the recipes as a side note - basically, onChange only shows names, onSubmit you get the "This group has the following restrictions" or w/e plus the recipe list
    // OR we figure out wtf is going wrong with our current code

  return (
    
    <div className="guestList">
      {userChoice ?
        <>
          <h2>Party Summary</h2>
          <ul className="partySummary">
            <li className="guestName">
              <h3>Name</h3>
              <GuestListNames
                guest={guest}
                userChoice={userChoice}
              />
            </li>
            <li className="guestRestrictions">
              <h3>Dietary Restrictions</h3>
              <GuestListRestrictions
                guest={guest}
                userChoice={userChoice}
              />
            </li>
          </ul>
        </>
      : null}
    </div>
  )
}
export default GuestList;