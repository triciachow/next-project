import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>

      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home page</a>
        </Link>
      </p>
    </div>
  );
}
