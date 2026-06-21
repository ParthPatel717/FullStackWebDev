const PersonForm = (props) => {
    return (
    <div>
         <form onSubmit={props.addNewPerson}>
        <div> name: <input value={props.newName} onChange={props.handleChange}/>  </div>
        <div> number: <input value = {props.newNumber} onChange={props.handleNewNumber}/> </div>
        <div> <button type="submit">add</button>   </div>
      </form>
      </div>
    )
}
export default PersonForm