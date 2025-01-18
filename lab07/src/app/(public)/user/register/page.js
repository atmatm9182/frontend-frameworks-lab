"use client";

import { app } from "@/lib/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

export default function Register() {
    const { user } = useAuth();

    const router = useRouter();

    const [error, setError] = useState(null);

    if (user) {
        return <>You are already logged in</>;
    }

    async function onSubmit(e) {
        const auth = getAuth(app);

        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(
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
