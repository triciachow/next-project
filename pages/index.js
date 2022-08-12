import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Officia cillum tempor eiusmod deserunt ea occaecat esse sunt culpa
        excepteur Lorem. Esse nostrud occaecat esse dolor laboris cupidatat.
        Cupidatat consequat nostrud fugiat id veniam Lorem ipsum tempor aliquip.
        Ea nulla ad sunt amet excepteur in excepteur ipsum. Lorem quis proident
        eu nisi reprehenderit reprehenderit magna velit.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
