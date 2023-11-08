import Head from "next/head"
import NavBar from "../components/NavBar"
import '../styles/global.css'


function App({ Component, pageProps }) {
    console.log('This will be rendered first')

    return (


        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <header>
                <NavBar />
            </header>

            <Component {...pageProps} />



        </>
    )
}

export default App


//