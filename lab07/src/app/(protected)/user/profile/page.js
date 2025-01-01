"use client";

import Image from "next/image";
import { useAuth } from "@/lib/AuthContext";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

export default function Profile() {
    const { user } = useAuth();

    const [error, setError] = useState(null);

    if (!user) {
        return <h1>You have to be logged in to access this page</h1>;
    }

    async function onSubmit(event) {
        event.preventDefault();

        const d = (name) => event.currentTarget[name].value;

        try {
            await updateProfile(user, {
                displayName: d("display-name"),
                photoURL: d("photo-url"),
            });
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
                <form onSubmit={onSubmit}>
                    <p>Email: {user.email}</p>
                    <label htmlFor="display-name">Display name</label>
                    <input type="text" id="display-name" name="display-name" defaultValue={user.displayName ?? ""}/>
                    <br/>
                    <label htmlFor="photo-url">Photo URL</label>
                    <input type="url" id="photo-url" name="photo-url" defaultValue={user.photoURL ?? ""}/>
                    <br/>
                    <input type="submit" value="Update" />
                </form>
            </>
        );
}
