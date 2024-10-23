function PersonProfile({ id, name, eyes }) {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "fit-content",
        margin: "4px auto",
        padding: "2px",
      }}
    >
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Eye color: {eyes}</p>
    </div>
  );
}

export default PersonProfile;
