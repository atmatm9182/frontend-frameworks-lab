"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function Verify() {
    const { loading, user } = useAuth();

    const router = useRouter();

    useEffect(() => {
        if (loading || !user) return;

        if (user.emailVerified) {
            router.push("/user/profile");
            return;
        }

        (async () => {
            const auth = getAuth(app);
            await signOut(auth);
        })();
    }, [loading]);

    return (
        <p>Please verify your email by clicking the link in email, and log in again</p>
    );
}
