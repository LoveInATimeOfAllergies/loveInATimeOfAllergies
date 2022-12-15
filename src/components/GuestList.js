const GuestList = ({guest, userChoice}) => {
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
        <p>This party's dietary restrictions are: {
          // filteredArray.map((string) => {
          //   return (
          //     <span>{string}</span>
          //   )
          // })
        } </p>
      </section>
  )
}
export default GuestList;