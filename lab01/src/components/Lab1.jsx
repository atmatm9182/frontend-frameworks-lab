import { useState } from "react";
import PersonProfile from "./PersonProfile";

function Lab1({ people }) {
  const [persons, setPersons] = useState(people);

  return (
    <div>
      {persons.map((person, idx) => (
        <PersonProfile
          {...person}
          killMe={() => {
            const newPersons = [...persons];
            newPersons.splice(idx, 1);
            return setPersons(newPersons);
          }}
          key={idx}
        />
      ))}
    </div>
  );
}

export default Lab1;
