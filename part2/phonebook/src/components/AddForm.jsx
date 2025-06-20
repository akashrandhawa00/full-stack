const addName = (event) => {
  event.preventDefault();
  const personObject = {
    id: persons.length + 1,
    name: newName,
    number: newNumber,
  };

  let i = 0;
  for (i = 0; i < persons.length; i++) {
    if (persons[i].name === personObject.name) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      break;
    }
  }

  if (i === persons.length) {
    setPersons([...persons, personObject]);
    setNewName("");
    setNewNumber("");
  }
};

export default addName;
