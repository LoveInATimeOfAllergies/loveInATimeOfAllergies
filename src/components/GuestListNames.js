const GuestListNames = ({guest, userChoice}) => {
  return(
    <div>
          {guest.map(({partyKey, newObject:{user, key}}) => {
            // Compares partyKey to selected party choice
            if (partyKey === userChoice) {
                return (
                    <p key={key}>{user}</p>
                );
            } else {
              return null
            }
          })}
    </div>
  )
}
export default GuestListNames;