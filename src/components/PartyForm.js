const PartyForm = ({ partyInput, setPartyInput }) => {
  const handleInputChangeParty = (event) => {
    setPartyInput(event.target.value.toLowerCase());
  };

  return (
    <form action="submit" className="partyForm">
      <h2>Party Create</h2>
      <label htmlFor="newParty">Party Name: </label>
      <input
        type="text"
        id="party"
        onChange={handleInputChangeParty}
        value={partyInput}
        placeholder="ex: Birthday Party"
      />
    </form>
  );
};
export default PartyForm;
