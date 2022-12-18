const PartyForm = ({ partyInput, setPartyInput }) => {
  const handleInputChangeParty = (event) => {
    setPartyInput(event.target.value);
  };

  return (
    <form action="submit" className="partyForm">
      <label htmlFor="newParty">Add Party: </label>
      <input
        type="text"
        id="party"
        onChange={handleInputChangeParty}
        value={partyInput}
      />
    </form>
  );
};
export default PartyForm;
