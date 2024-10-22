import PersonProfile from "./PersonProfile";

function Lab1({ people }) {
  return (
    <div>
      {people.map((person) => (
        <PersonProfile {...person} />
      ))}
    </div>
  );
}

export default Lab1;

