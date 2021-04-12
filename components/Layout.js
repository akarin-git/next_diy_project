import Head from 'next/head'
import Link from 'next/link'
import MainNav from "../components/MainNav";


export default function Layout({children,title = "fab loop"}) {
    return (
    <>
        <Head>
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
