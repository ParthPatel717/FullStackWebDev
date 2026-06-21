import { useState } from 'react'


const Person = ({person}) => {
  return(
    <li>{person.name} {person.number}</li>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newName, setNewName] = useState('') 
  const [newNumber,setNewNumber] = useState('')
  const [filterVal, setFilterVal] = useState(' ')


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
      <div> filter shown with <input  onChange = {handleFilter}/></div>
      <h2>Add a new</h2>

      <form onSubmit={addNewPerson}>
        <div> name: <input value={newName} onChange={handleChange}/>  </div>
        <div> number: <input value = {newNumber} onChange={handleNewNumber}/> </div>
        <div> <button type="submit">add</button>   </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(person => person.name.toLowerCase().includes(filterVal.toLowerCase())).map(person => (<Person key = {person.name} person={person} />))}
      </ul>
    </div>
  )
}

export default App
