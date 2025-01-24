"use client";

import { Suspense, useLayoutEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function Protected({ children }) {
    const { user, loading } = useAuth();
    const retUrl = usePathname();
    const router = useRouter();

    useLayoutEffect(() => {
        if (!loading && !user) {
            router.push(`/user/signin?returnUrl=${retUrl}`);
        }
    }, [loading, user, retUrl]);

    return (
        <Suspense>
            { children }
        </Suspense>
    );
}
