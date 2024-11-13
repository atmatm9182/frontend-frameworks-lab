import { useContext, useState, useEffect } from "react";
import AppContext from "./data/AppContext";

export function useData() {
    return useContext(AppContext).items;
}

export function useDispatch() {
    return useContext(AppContext).dispatch;
}

export function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(setData);
    }, [url]);

    return data;
}
