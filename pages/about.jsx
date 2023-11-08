import Head from "next/head"

function AboutPage() {
    console.log('[HomePage] render')
    return (
        <>

            <Head>
                <title>About me</title>
                <meta name="description" value="Details about me" />
                
                
            </Head>

            <main>
                <h1>About</h1>
            </main>
        </>
    )
}

export default AboutPage