// import { readdir, readFile } from "fs/promises";
import { readFile } from "fs/promises";

import { marked } from "marked";
import matter from "gray-matter";

//1. Define a separate function to read the local file
// make the file name become dynamic, equal to the 'slug' argument passed in from the getStaticProps()

//2. Import 'marked' function from 'marked' module to parse md file into raw HTML
//Return as an object

//3. Using 'gray-matter' to get data from marked down. This will return 2 objects: {data, content} -> that we can extract and use
//data: 'this is the meta data. Everything at the top, between --- here ---
//content: is the content of the md file everything after --- data ---
//Then we pass the 'content' into the marked() to parse it into RAW HTML

// Getting the data
export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const { data, content } = matter(source);
  const html = marked(content); // Turn content md in to raw HTML
  console.log("data:", data.title);
  console;
  return {
    date: data.date,
    title: data.title,
    body: html,
  };
}



//2.List all items in the folder with readdir
// We use readdir to list all items in the folder /pages/posts/ , so we can get the list of all names to include in the getStaticPaths()
// export async function getSlugs() {
//   const suffix = ".md";
//   const files = await readdir("content/posts");
//   return files
//     .filter((file) => file.endsWith(suffix))
//     .map((file) => file.slice(0, -suffix));
// }
