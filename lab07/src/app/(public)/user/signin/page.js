"use client";

import { auth } from "@/lib/firebase";

import { useSearchParams, useRouter } from "next/navigation";
import {
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth";

export default function Signin() {
    const params = useSearchParams();
    const router = useRouter();
    const returnUrl = params.get("returnUrl") ?? "/";

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target["email"].value;
        const password = e.target["password"].value;

        try {
            await setPersistence(auth, browserSessionPersistence);

            const credentials = signInWithEmailAndPassword(auth, email, password);
            router.push(returnUrl);
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
