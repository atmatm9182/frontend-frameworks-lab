"use client";

import { app } from "@/lib/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LogOut() {
    const router = useRouter();

    return (
        <button onClick={async () => {
            const auth = getAuth(app);
            await signOut(auth);
            router.push("/user/login");
        }}>
               Sign out
        </button>
    );
}
