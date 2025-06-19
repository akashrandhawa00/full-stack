import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("Insert Name...");

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };

    let i = 0;
    for (i = 0; i < persons.length; i++) {
      if (persons[i].name === personObject.name) {
        alert(`${newName} is already added to phonebook`);
        console.log(`VALUE OF ${i}`);
        break;
      }
    }

    if (i === persons.length) {
      setPersons([...persons, personObject]);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
