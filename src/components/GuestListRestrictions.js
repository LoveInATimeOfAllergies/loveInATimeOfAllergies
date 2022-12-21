const GuestListRestrictions = ({guest, userChoice}) => {
    let num = 0;
    return(
        <div>
            {guest.map((
            {partyKey, newObject: {alcoholFree, celeryFree, crustaceanFree, dairyFree, eggFree, fishFree, fodmapFree, glutenFree, key,  kidneyFriendly, kosher, lupineFree, molluskFree, mustardFree, peanutFree, pescatarian, porkFree, redMeatFree, sesameFree, shellfishFree, soyFree, sulfiteFree, treeNutFree, vegan, vegetarian, wheatFree}}
        ) => {
            // Compares partyKey to selected party choice
            if (partyKey === userChoice) {
                num++;
                return (
                    <p key={key}>
                        {num + '.'} &nbsp;
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