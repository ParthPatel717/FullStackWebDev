const Person = (props) => {
  return (
    <div>
      <li>
        {props.person.name} {props.person.number}
        <button
          onClick={() => {
            const confirmed = window.confirm(`Delete ${props.person.name}`);
            if (confirmed) {
              props.handleDelete(props.person.id);
            }
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.persons
          .filter((person) =>
            person.name.toLowerCase().includes(props.filterVal.toLowerCase()),
          )
          .map((person) => (
            <Person
              key={person.name}
              person={person}
              handleDelete={props.handleDelete}
            />
          ))}
      </ul>
    </div>
  );
};

export default Persons;
