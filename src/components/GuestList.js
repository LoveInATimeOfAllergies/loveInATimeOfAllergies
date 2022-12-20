import GuestListNames from './GuestListNames.js';
import GuestListRestrictions from './GuestListRestrictions';

const GuestList = ({ guest, userChoice }) => {
  return (
    
    <div className="guestList">
      {userChoice ?
        <div className="summaryContainer cssanimation">
          <h2>Step 3: Review Your Party</h2>
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
        </div>
      : null}
    </div>
  )
}
export default GuestList;