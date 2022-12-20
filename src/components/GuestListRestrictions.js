const GuestListRestrictions = ({guest, userChoice}) => {
  return(
        <div>
            {guest.map((
            {partyKey, newObject: {alcoholFree, celeryFree, crustaceanFree, dairyFree, eggFree, fishFree, fodmapFree, glutenFree, key,  kidneyFriendly, kosher, lupineFree, molluskFree, mustardFree, peanutFree, pescatarian, porkFree, redMeatFree, sesameFree, shellfishFree, soyFree, sulfiteFree, treeNutFree, vegan, vegetarian, wheatFree}}
        ) => {
            // Compares partyKey to selected party choice
            if (partyKey === userChoice) {
                return (
                    <p key={key}>
                        {alcoholFree} {celeryFree} {crustaceanFree} {dairyFree} {eggFree} {fishFree} {fodmapFree} {glutenFree} {kidneyFriendly} {kosher} {lupineFree} {molluskFree} {mustardFree} {peanutFree} {pescatarian} {porkFree} {redMeatFree} {sesameFree} {shellfishFree} {soyFree} {sulfiteFree} {treeNutFree} {vegan} {vegetarian} {wheatFree} &nbsp;
                    </p>
                )
            } else {
                return null
            }
        })}
        </div>
    )
}
export default GuestListRestrictions;