const GuestListNames = ({guest, userChoice}) => {
  let num = 0;
  return(
    <div>
      {guest.map(({partyKey, newObject:{user, key}}) => {
        // Compares partyKey to selected party choice
        if (partyKey === userChoice) {
          num++;
            return (
                <p key={key}>{num + '.'} {user}</p>
            );
        } else {
          return null
        }
      })}
    </div>
  )
}
export default GuestListNames;