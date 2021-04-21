import Head from 'next/head'
import Link from 'next/link'
import MainNav from "../components/MainNav";
import MenuBtn from "../components/Base/MenuBtn";
import { Box,Text,Grid } from "@chakra-ui/react"



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
        <Box position={["none","none","relative"]}>
        {children}
        
        <MenuBtn/>
        </Box>
 
        </main>
        <footer>
            <Box w="80%" m="auto" pt="20">
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            </Grid>
            </Box>
            <Box align="center" mt="10">
            <Text mb={-20} color="#708090">
            (c) Fab Loop 2021
            </Text>
            </Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6fa" fill-opacity="0.7" d="M0,64L60,74.7C120,85,240,107,360,122.7C480,139,600,149,720,144C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </footer>

    <style JSX>
    
    </style>
    </>
    );
}
