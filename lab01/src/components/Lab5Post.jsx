export default function Lab5Post() {
    const { id } = useParams();

    const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
    const comments = useFetch("https://jsonplaceholder.typicode.com/comments");

    const post = posts.find((p) => p.id === +id);
    const pComments = comments.filter((c) => c.postId === +id);

    console.log(pComments);

    return (
        <>
            <h1>{post.body}</h1>
        </>
    );
}
