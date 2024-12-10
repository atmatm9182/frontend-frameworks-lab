"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <>
            <h1>Page not found!!</h1>
            <button
                style={{ fontFamily: "inherit", fontSize: "1em" }}
                onClick={() => router.push("/")}
            >
                 Go back
            </button>
        </>
    );
}
