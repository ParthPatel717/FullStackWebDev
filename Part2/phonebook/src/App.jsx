import { useEffect, useState } from 'react'
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(()=>{
    console.log('fetching')
    axios.get("http://localhost:3001/persons")
      .then(response =>{
        setPersons(response.data)
      })
  },[])

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
      axios
        .post('http://localhost:3001/persons',personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
      
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
