import { useFetch } from "../hooks";
import TableDataReducer from "../data/TableDataReducer";

import { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";

export default function Lab5() {
    const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
    const users = useFetch("https://jsonplaceholder.typicode.com/users");
    const comments = useFetch("https://jsonplaceholder.typicode.com/comments");

    const [state, dispatch] = useReducer(TableDataReducer, []);

    const [originalState, setOriginalState] = useState([]);

    useEffect(() => {
        if (posts.length !== 0 && users.length !== 0 && comments.length !== 0) {
            const init = posts.map((post) => ({
                        post,
                        user: users.find((u) => u.id === post.userId),
                        comments: comments.filter((c) => c.postId === post.id),
            }));

            dispatch({ init });

            setOriginalState(init);
        }
    }, [posts, users, comments])

    return (
        <table>
            <tr>
                <th>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                                                               User
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "asc", sortBy: (item) => item.user.name, })}>
                                                                                                                                 Ascending
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "desc", sortBy: (item) => item.user.name, })}>
                                                                                                                                  Descending
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "nat", originalState, })}>
                                                                                               Natural
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </th>
                <th>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                                                               Post
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "asc", sortBy: (item) => item.post.title, })}>
                                                                                                                                  Ascending
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "desc", sortBy: (item) => item.post.title, })}>
                                                                                                                                   Descending
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "nat", originalState, })}>
                                                                                               Natural
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </th>
                <th>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                                                               Comment
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "asc", sortBy: (item) => item.comments.length, })}>
                                                                                                                                       Ascending
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "desc", sortBy: (item) => item.comments.length, })}>
                                                                                                                                        Descending
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch({ sortOrder: "nat", originalState, })}>
                                                                                               Natural
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </th>
            </tr>
            {state.map((item) => (
                <tr>
                    <td>
                        <Link to={`/lab5/users/${item.user.id}`}>
                            {item.user.name}
                        </Link>
                    </td>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item>
                            <Accordion.Header>{item.post.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.post.body}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Link to={`/lab5/posts/${item.post.id}/items`}>
                        {item.comments.length}
                    </Link>
                </tr>
            ))}
        </table>
    );
}
