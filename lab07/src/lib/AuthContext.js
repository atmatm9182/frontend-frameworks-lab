"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        }),
        [],
    );

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
