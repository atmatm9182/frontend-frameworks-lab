import Link from "next/link";

export default function Home() {
    return (
        <>
              You can start by <Link href="/user/register">registering</Link>
            <br />
                          or <Link href="/user/register">logging in</Link>
        </>
    );
}
