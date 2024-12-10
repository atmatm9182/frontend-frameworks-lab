"use client";

import { usePathname } from "next/navigation";


import { useAuth } from "@/lib/AuthContext";

export default function Protected({ children }) {
    const { user } = useAuth();
    const retUrl = usePathname();

    useLayoutEffect(() => {
        if (!user) {
            redirect(`/user/signin?returnUrl=${retUrl}`);
        }
    }, []);

    return (
        <>
            { children }
        </>
    );
}
