import Head from 'next/head'
import Link from 'next/link'
import MainNav from "../components/MainNav";


export default function Layout({children,title = "fab loop"}) {
    return (
    <>
        <Head>
        <meta property="og:image" content="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615206113/example-25_toyoqb.svg:これはOGPテキストです！,co_rgb:333,w_500,c_fit/v12345678/filename.png"/>
        <meta name="twitter:card" content="summary_large_image"/>

                <title>{title}</title>
        </Head>
        <header>
        <MainNav />
        </header>
        <main>
        {children}
        </main>
        <footer>
        </footer>

    <style JSX>
    
    </style>
    </>
    );
}
