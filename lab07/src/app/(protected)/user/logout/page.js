"use client";

import { app } from "@/lib/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LogOut() {
    const router = useRouter();

    const auth = getAuth(app);

    return (
        <button onClick={() => {
            signOut(auth);
            router.push("/");
        }}>
            Sign out
        </button>
    )
}
