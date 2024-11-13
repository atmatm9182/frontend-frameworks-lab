import RatingBar from "./RatingBar";
import { useDispatch } from "../hooks";

function PersonProfile({ id, name, eyes, rating }) {
    const dispatch = useDispatch();

    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Eye color: {eyes}</p>
            <p>Rating: {rating}</p>
            <RatingBar rating={rating} />
            <button onClick={() => dispatch({
                id,
                type: "edit",
            })}>Edit</button>
            <button onClick={() => dispatch({
                id,
                type: "delete",
            })}>Delete</button>
            <button onClick={() => dispatch({
                id,
                type: "rate",
            })}>Rate</button>
        </div>
    );
}

export default PersonProfile;
