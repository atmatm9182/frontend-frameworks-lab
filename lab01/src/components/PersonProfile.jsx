import RatingBar from "./RatingBar";
import { useState, useContext } from "react";
import AppContext from "../data/AppContext";

function PersonProfile({ id, name, eyes, rating }) {
    const { dispatch } = useContext(AppContext);

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
