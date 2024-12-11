"use client";

import { app } from "@/lib/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "@/lib/AuthContext";

export default function RegisterUser() {
    const { user } = useAuth();

    if (user) {
        return <></>;
    }

    const auth = getAuth(app);
    const [error, setError] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            The form for user registration will be here!
        </>
    );
}
