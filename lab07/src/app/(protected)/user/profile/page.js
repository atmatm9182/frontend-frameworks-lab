"use client";

import { useAuth } from "@/lib/AuthContext";
import { updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Profile() {
    const { user } = useAuth();

    const [city, setCity] = useState(null);
    const [street, setStreet] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const snapshot = await getDoc(doc(db, "users", user?.uid));
            const address = snapshot.data().address;

            setCity(address.city);
            setStreet(address.street);
            setZipCode(address.zipCode);
        })()
    }, [user]);

    if (!user) {
        return <h1>You have to be logged in to access this page</h1>;
    }

    async function onSubmit(event) {
        event.preventDefault();

        const d = (name) => event.currentTarget[name].value;

        try {
            // NOTE: need to do this because after the call to `updateProfile`
            // the `currentTarget` field of the `event` is set to null, for
            // whatever arcane reasons
            const city = d("city");
            const street = d("street");
            const zipCode = d("zip-code");

            await updateProfile(user, {
                displayName: d("display-name"),
                photoURL: d("photo-url"),
            });

            await setDoc(doc(db, "users", user.uid), {
                address: {
                    city,
                    street,
                    zipCode,
                },
            });

            console.log("changed the address of user with id %s", user.uid);
        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    return error !== null ? (
        <h1 style={{ color: "red" }}>Error: {error}</h1>
    ) : (
            <>
                {
                    user.photoURL
                        ?
                        <img src={user.photoURL} width="300" height="300" alt="User profile image" />
                        :
                        <> </>
                }
                {
                    city && street && zipCode
                    ? <>
                            <p>City: {city}</p>
                            <p>Street: {street}</p>
                            <p>Zip code: {zipCode}</p>
                        </>
                    : <> </>
                }
                <form onSubmit={onSubmit}>
                    <p>Email: {user.email}</p>
                    <label htmlFor="display-name">Display name</label>
                    <input type="text" id="display-name" name="display-name" defaultValue={user.displayName ?? ""}/>
                    <br/>
                    <label htmlFor="photo-url">Photo URL</label>
                    <input type="url" id="photo-url" name="photo-url" defaultValue={user.photoURL ?? ""}/>
                    <br/>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city"/>
                    <br/>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" name="street"/>
                    <br/>
                    <label htmlFor="zip-code">Zip code</label>
                    <input type="text" id="zip-code" name="zip-code"/>
                    <br/>
                    <input type="submit" value="Update" />
                </form>
            </>
        );
}
