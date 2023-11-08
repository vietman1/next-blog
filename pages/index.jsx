import Head from "next/head";
import Link from "next/link";

function Homepage() {
  console.log("[HomePage] render");
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This my blog" />
      </Head>

      <main>
        <h1>This is my home page</h1>

        <ul>
          <li>
            <Link href="/posts/first-post">My first post</Link>
          </li>

          <li>
            <Link href="/posts/second-post">My second post</Link>
          </li>
          <li>3</li>
          <li>4</li>
        </ul>
      </main>
    </>
  );
}

export default Homepage;
