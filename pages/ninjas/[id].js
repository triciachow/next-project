// If a page has Dynamic Routes and uses `getStaticProps`,
// it needs to define a list of paths to be statically generated.
// Next.js will statically pre-render all the paths specified by `getStaticPaths`.

// Generates /ninjas/1, /ninjas/2 and etc
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Fetch all data and map all the ids
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

export default function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.address.city}</p>
      <p>{ninja.website}</p>
    </div>
  );
}
