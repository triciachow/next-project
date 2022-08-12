import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

// Next.js will pre-render this page at build time
// using the props returned by getStaticProps.
// Should use `getStaticProps` if data required to render page
// is available at build time ahead of user's request

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
