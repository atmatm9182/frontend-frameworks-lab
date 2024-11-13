import { useParams } from "react-router-dom";
import { useFetch } from "../hooks";

export default function Lab5User() {
    const { id } = useParams();

    const users = useFetch("https://jsonplaceholder.typicode.com/users");
    const user = users.find((u) => u.id === +id);

    return (
        !user
            ? <h1>No such user</h1>
            : <div>
                  {Object.entries(user).map(([key, value]) => (
                      typeof value === "object"
                          ? <> </>
                          : <p>{key}: {value}</p>
                  ))}
              </div>
    );
}
