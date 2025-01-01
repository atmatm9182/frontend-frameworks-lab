"use client";

import { useLayoutEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function Protected({ children }) {
    const { user } = useAuth();
    const retUrl = usePathname();
    const router = useRouter();

    useLayoutEffect(() => {
        if (!user) {
            router.push(`/user/signin?returnUrl=${retUrl}`);
        }
    }, [retUrl, user, router]);

    return (
        <>
            { children }
        </>
    );
}
