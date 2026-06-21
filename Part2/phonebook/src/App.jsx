import { useState } from 'react'
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newName, setNewName] = useState('') 
  const [newNumber,setNewNumber] = useState('')
  const [filterVal, setFilterVal] = useState('')


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

  const handleFilter = (event) => {
    setFilterVal(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
     
      <h2>Add a new</h2>
      <PersonForm 
        addNewPerson={addNewPerson}
        newName={newName} 
        handleChange= {handleChange} 
        newNumber={newNumber}  
        handleNewNumber={handleNewNumber}  
        />
     
      <h2>Numbers</h2>
      <Persons persons={persons} filterVal={filterVal}/>
     
    </div>
  )
}

export default App
