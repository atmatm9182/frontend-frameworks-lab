import PersonProfile from "./PersonProfile";
import { useState } from "react";

function Lab1({ people }) {
    const [persons, setPersons] = useState(people);
    
  return (
    <div>
      {persons.map((person, idx) => (
          <PersonProfile key={person.id} {...person}/>
      ))}
    </div>
  );
}

export default Lab1;

