import { MAX_RATING } from "../data/constants";

function RatingBar({ rate }) {
  const stars = [];
  for (let i = 1; i <= MAX_RATING; i++) {
    const star =
      i <= rate ? (
        <span style={{ fontSize: "1.5em" }}>&#x2605;</span>
      ) : (
        <span style={{ fontSize: "1.5em" }}>&#x2606;</span>
      );
    stars.push(star);
  }

  return <div>{stars}</div>;
}

export default RatingBar;
