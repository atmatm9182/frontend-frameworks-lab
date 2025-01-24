"use client";

import { useAuth } from "@/lib/AuthContext";

import Link from "next/link";

export default function Header() {
    const { user, loading } = useAuth();

    const classes = "";

    if (!loading && !user) {
        return <></>;
    }

    return (
        <div className="bg-[crimson]">
            <Link className="p-1 m-2" href="/user/logout">Log out</Link>
            <Link className="p-1 m-2" href="/schedule">See schedule</Link>
        </div>
    );
}
