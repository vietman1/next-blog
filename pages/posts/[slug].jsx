import Head from "next/head";
// import { getPost, getSlugs } from "../../lib/posts";
import { getPost } from "../../lib/posts";



//4.
//Define path names for each post you want to route to
export async function getStaticPaths() {
// const slugs = await getSlugs()
  return {
    // paths: slugs.map((slug) => ({
    //     params:{slug}
    // }))
    paths: [
      { params: { slug: "first-post"} },
      { params: { slug: "second-post"} }
    ]
    ,
    fallback: false,
  };
}

//1.
//All of inside getStaticProps function is rendered on server side
//Import and Use readFile function of NodeJS to read a local file using await. utf8 -> data ecoding
//Since this is Json data, we parse JSON into JS object
//Then assign its value to the 'props'. Which will be a global value and available within the scope of the entire component file

//2.Refactor
// This is to display the data
// call the getPost() and pass the file name as an argument

//5. Using the 'paths' from getStaticPaths()
//'Paths' from getStaticPaths() will be automatically passed to the getStaticProps(context) as 'context' argument
//We get the name of the path from 'context' object and pass it to getPost() to return the correct file to render that matches with the path.

export async function getStaticProps(context) {
  console.log("getStaticPaths:", context);
  console.log("getStaticPaths:", context.params.slug);
  console.log("[PostPage] with getStaticProps");
  const post = await getPost(context.params.slug);
  return {
    props: { post }, //Available for global scope
  };
}

//3.
// use dangerouslySetInnerHTML to render raw HTML received from 'marked' package directly to the DOM. Should only use it if we trust the source of the HTML. Since it is our own markdown file => OK

function firstPostPage(props) {
  return (
    <>
      <Head>
        <title>{props.post.title} </title>
      </Head>

      <main>
        <h1>{props.post.title}</h1>
        <h5>{props.post.date}</h5>
        <article
          dangerouslySetInnerHTML={{ __html: props.post.body }}
        ></article>
      </main>
    </>
  );
}

export default firstPostPage;
