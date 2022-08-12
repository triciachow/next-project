import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Officia cillum tempor eiusmod deserunt ea occaecat esse sunt culpa
        excepteur Lorem. Esse nostrud occaecat esse dolor laboris cupidatat.
        Cupidatat consequat nostrud fugiat id veniam Lorem ipsum tempor aliquip.
        Ea nulla ad sunt amet excepteur in excepteur ipsum. Lorem quis proident
        eu nisi reprehenderit reprehenderit magna velit.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
