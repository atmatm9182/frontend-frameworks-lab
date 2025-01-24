"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { db } from "@/lib/firebase";
import { updateDoc, setDoc, doc, deleteField } from "firebase/firestore";
import { redirect } from "next/navigation";

export default function UpdateSchedule() {
    const params = useSearchParams();

    const [description, setDescription] = useState(params.get("desc") ?? "");

    const { user } = useAuth();

    const updateLecture = async (e) => {
        e.preventDefault();

        const ref = doc(db, "schedules", user?.uid);

        await setDoc(ref, {
            [params.get("month")]: {
                [params.get("day")]: {
                    [params.get("hour")]: description,
                },
            },
        }, { merge: true });

        redirect("/schedule");
    };

    const deleteLecture = async () => {
        const ref = doc(db, "schedules", user?.uid);

        await updateDoc(ref, {
            [`${params.get("month")}.${params.get("day")}.${params.get("hour")}`]: deleteField(),
        });

        redirect("/schedule");
    };

    return (
        <>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
            <br />
            <button className="m-2" onClick={updateLecture}>Change</button>
            {
                params.get("desc")
                    ? <button className="m-2" onClick={deleteLecture}>Delete</button>
                    : <></>
            }
        </>
    );
}
