import Head from "next/head"
import { getPost } from '../../lib/posts'


//1. 
//All of inside getStaticProps function is rendered on server side
//Import and Use readFile function of NodeJS to read a local file using await. utf8 -> data ecoding
//Since this is Json data, we parse JSON into JS object
//Then assign its value to the 'props'. Which will be a global value and available within the scope of the entire component file

//2.Refactor
// This is to display the data
// call the getPost() and pass the file name as an argument

export async function getStaticProps() {
    const post = await getPost('first-post')
    console.log(post.title)
    return {
        props: { post } //Available for global scope
    }
}


//use dangerouslySetInnerHTML to render raw HTML received from 'marked' package directly to the DOM. Should only use it if we trust the source of the HTML. Since it is our own markdown file => OK
function firstPostPage(props) {

    return (
        <>

            <Head>
                <title>{props.post.title} </title>
            </Head>

            <main>
                <h1>{props.post.title}</h1>
                <h5>{props.post.date}</h5>
                <article dangerouslySetInnerHTML={{ __html: props.post.body }}>
                </article>
            </main>

        </>
    )
}

export default firstPostPage

