import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../data/AppContext";

function Lab4Edit() {
    const params = useParams();
    if (params.id === undefined) {
        throw new Error("id is not present");
    }

    const id = +params.id;

    const navigate = useNavigate();
    const { dispatch } = useContext(AppContext);

    const [isSending, setIsSending] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        await new Promise((res) => {
            setIsSending(true);

            setTimeout(() => {
                setIsSending(false);
                res();
            }, 1000);
        });

        // clear the inputs
        for (const key of formData.keys()) {
            event.target[key].value = "";
        }

        dispatch({
            id,
            type: "edit",
            payload: {
                id,
                name: formData.get("name"),
                rating: +formData.get("rating"),
                eyes: formData.get("eyes"),
            },
        });

        navigate("/lab3");
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="name" name="name" id="name"/>
                <label htmlFor="name">Name</label>
                <br/>
                <input type="rating" name="rating" id="rating"/>
                <label htmlFor="rating">Rating</label>
                <br/>
                <input type="eyes" name="eyes" id="eyes"/>
                <label htmlFor="eyes">Eyes</label>
                <br/>
                <input disabled={isSending} type="submit"/>
            </form>
        </>
    );
}

export default Lab4Edit;
