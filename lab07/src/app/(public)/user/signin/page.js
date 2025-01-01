"use client";

import { useRouter } from "next/navigation";
import {
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "@/lib/firebase";

export default function Signin() {
    const auth = getAuth(app);

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target["email"].value;
        const password = e.target["password"].value;

        try {
            await setPersistence(auth, browserSessionPersistence);

            signInWithEmailAndPassword(auth, email, password);
            router.push("/user/profile");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <br />
            <input type="submit" />
        </form>
    );
}
