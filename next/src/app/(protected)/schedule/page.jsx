"use client";

import { useAuth } from "@/lib/AuthContext";
import { useState, useMemo, useEffect } from "react";
import { redirect } from "next/navigation";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Schedule() {
    const { user, loading } = useAuth();

    const [lectures, setLectures] = useState({});

    useEffect(() => {
        if (loading || !user) {
            return;
        }

        const scheduleRef = doc(db, "schedules", user?.uid);
        getDoc(scheduleRef).then((doc) => {
            const data = doc.data();
            setLectures(data);
        });
    }, [user, loading]);

    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedWeek, setSelectedWeek] = useState(0);

    const body = useMemo(
        () => renderScheduleBody(months[selectedMonth], selectedWeek, lectures[months[selectedMonth]]),
        [selectedMonth, selectedWeek, lectures],
    );

    return (
        <>
            <div className="flex flex-row justify-between w-full border-2 border-black">
                <p onClick={() => setSelectedMonth(selectedMonth === 0 ? 11 : selectedMonth - 1)} className="p-1 border-r-2 border-black cursor-pointer select-none">&lt;</p>
                <p>{months[selectedMonth]}</p>
                <p onClick={() => setSelectedMonth((selectedMonth + 1) % 12)} className="p-1 border-l-2 border-black cursor-pointer select-none">&gt;</p>
            </div>
            <div className="flex flex-row justify-between w-full border-2 border-black">
                <p onClick={() => setSelectedWeek(selectedWeek === 0 ? 3 : selectedWeek - 1)} className="p-1 border-r-2 border-black cursor-pointer select-none">&lt;</p>
                <p>Week {selectedWeek + 1}</p>
                <p onClick={() => setSelectedWeek((selectedWeek + 1) % 4)} className="p-1 border-l-2 border-black cursor-pointer select-none">&gt;</p>
            </div>

            <table className="border-2 border-black border-solid border-collapse">
                <thead>
                    <tr key="awesome-header-key">
                        <th className="border-2 border-black border-solid border-collapse">Hour</th>
                        {days.map((day) => <th key={day} className="border-2 border-black border-solid border-collapse">{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                    { body }
                </tbody>
            </table>
        </>
    );
}

function renderScheduleBody(month, week, schedule) {
    const rows = [];

    for (const hour of hours) {
        const cells = [<td key={hour}>{hour}:00</td>];

        for (let idx = 0; idx < days.length; idx++) {
            const key = `${hour}${idx}`;

            const day = week * 7 + idx;

            let lecture;
            if (!(schedule && schedule[day] && schedule[day][hour])) {
                lecture = "";
            } else {
                lecture = schedule[day][hour];
            }

            const className = lecture ? "" : " add-lecture";

            cells.push(<td className={`cursor-pointer ${className}`} key={key} onClick={() => {
                redirect(`/schedule/update?month=${month}&day=${day}&hour=${hour}&desc=${lecture}`)
            }}>{lecture}</td>);
        }

        rows.push(<tr key={hour}>{cells}</tr>);
    }

    return rows;
}
