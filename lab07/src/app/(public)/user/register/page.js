"use client";

import { app } from "@/lib/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterUser() {
    const existingUser = useAuth();

    const router = useRouter();

    if (existingUser?.auth) {
        return <>You are already logged in</>;
    }

    const auth = getAuth(app);
    const [error, setError] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth, e.target["email"].value,
                e.target["password"].value
            );
            await sendEmailVerification(auth.currentUser);

            router.push("/user/verify");
        } catch (e) {
            console.error(e);
            setError(e);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input name="email" type="email" />
            <label htmlFor="email">Email</label>
            <br />
            <input name="password" type="password" />
            <label htmlFor="password">Password</label>
            <br />
            <input type="submit" value="Register" />
        </form>
    );
}
