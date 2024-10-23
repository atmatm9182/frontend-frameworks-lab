import { useState } from "react";
import RatingBar from "./RatingBar";

function PersonProfile({ id, name, eyes, rating, killMe }) {
  const [rate, setRating] = useState(rating);

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
      <p>Rating: {rate}</p>
      <RatingBar rate={rate}/>
      <button onClick={() => console.log("TODO")}>Edit</button>
      <button onClick={killMe}>Delete</button>
      <button onClick={() => setRating((rate + 1) % 11)}>Rate</button>
    </div>
  );
}

export default PersonProfile;
