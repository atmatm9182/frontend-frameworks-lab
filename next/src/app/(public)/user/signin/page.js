"use client";

import { useRouter } from "next/navigation";
import {
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "@/lib/firebase";
import { useAuth } from "@/lib/AuthContext";
import Link from "next/link";

export default function Signin() {
    const auth = getAuth(app);

    const router = useRouter();

    const { user, loading } = useAuth();
    if (!loading && user) {
        return (
            <>
                <h1>You are already logged in as {user.displayName}</h1>
                <Link className="block" href="/user/profile">Go to profile</Link>
                <Link className="block" href="/schedule">See your schedule</Link>
            </>
        );
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target["email"].value;
        const password = e.target["password"].value;

        try {
            await setPersistence(auth, browserSessionPersistence);

            await signInWithEmailAndPassword(auth, email, password);
            router.push("/user/profile");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <br />
            <input type="submit" />
        </form>
    );
}
