import "./PartyForm.css"

const PartyForm = ({ partyInput, setPartyInput }) => {
  const handleInputChangeParty = (event) => {
    setPartyInput(event.target.value);
  };

  return (
    <form action="submit">
      <label htmlFor="newParty">Add Party </label>
      {/* CSS text-transform: capitalize? */}
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
