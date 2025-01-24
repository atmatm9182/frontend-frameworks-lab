export default function LoginForm({ login }) {
    async function onSubmit(e) {
        "use server";

        console.log("server si");
    }

    return (
        <form onSubmit={onSubmit} method="POST">
            <input type="email" name="email" />
            <input type="password" name="password" />
            <input type="submit" />
        </form>
    );
}
