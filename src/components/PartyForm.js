const PartyForm = ({ partyInput, setPartyInput }) => {
  const handleInputChangeParty = (event) => {
    setPartyInput(event.target.value.toLowerCase());
  };

  return (
    <div className="wrapper">
      <form action="submit" className="partyForm">
        <h2>Step 1: Create Your Party</h2>
        <fieldset>
          <legend>Enter what you would like to call your party, your guest's name and dietary restrictions, then click the Submit button. You can enter multiple guests and parties!</legend>
          <label htmlFor="newParty">Party Name:</label>
          <input
            type="text"
            id="party"
            onChange={handleInputChangeParty}
            value={partyInput}
            placeholder="ex: Birthday Party"
          />
        </fieldset>
      </form>
    </div>
  );
};
export default PartyForm;
