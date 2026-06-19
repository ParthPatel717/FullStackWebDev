import { useState } from 'react'
const Person = ({person}) => {
  return(
    <li>{person.name} {person.number}</li>
  )
}
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' , number: "232123331"}]) 
  const [newName, setNewName] = useState('') 
  const [newNumber,setNewNumber] = useState('')

  const addNewPerson = (event) =>{
    event.preventDefault()
    const nameExists = persons.some(person =>person.name === newName)
    if(newNumber === "" || newName ===""){
      alert("Fill all the details!")
    } else if(nameExists){
      alert(`${newName} already exists in phonebook.`)
    }else{
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }


  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div> name: <input value={newName} onChange={handleChange}/>  </div>
        <div> number: <input value = {newNumber} onChange={handleNewNumber}/> </div>
        <div> <button type="submit">add</button>   </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person)=>(
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  )
}

export default App
