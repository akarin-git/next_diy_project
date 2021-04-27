import Head from 'next/head'
import Link from 'next/link'
import MainNav from "../components/MainNav";
import MenuBtn from "../components/Base/MenuBtn";
import { Box,Text,Grid,Button,Image } from "@chakra-ui/react"
import { useState,useEffect } from "react";


export default function Layout({children,title = "Fab Loop",description="DIY レシピ投稿サイト"}) {
　const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  },[]);
    return (
    <>
      <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619447318/wed/logo_f2hpvg.png`} />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
        <header>
        <MainNav />
        </header>
        <main>
        <Box position={["none","none","relative"]}>
        <Box>
        {children}
        
        <MenuBtn/>
        </Box>
        </Box>
 
        </main>
        <footer>
            <Box w="60%" m="auto" pt="40" >
            <Grid templateColumns="repeat(5, 1fr)" gap={6} color="#808080" display={["none","flex"]} align="center">
            <Image
                   src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619447318/wed/logo_f2hpvg.png"
                        width={20} 
                        height={20}
                        
                  />
            <Link href={`/`}>
            <Box w="100%" h="10">
            <Text fontWeight="bold" fontSize="15px" _hover={{ color: 'pink' }}>
            ABOUT
            </Text>
            </Box>
            </Link>
            <Link href={`/recipe`}>
            <Box w="100%" h="10">
            <Text fontWeight="bold" fontSize="15px" _hover={{ color: 'pink' }}>
            RECIPE
            </Text>
            </Box>
             </Link>
             <Link href={`/blog`}>
            <Box w="100%" h="10">
            <Text fontWeight="bold" fontSize="15px" _hover={{ color: 'pink' }}>
            BLOG
            </Text>
            </Box>
            </Link>
            <Link href={`/signin`}>
            <Box w="100%" h="10">
            <Text fontWeight="bold" fontSize="15px" _hover={{ color: 'pink' }}>
            Login
            </Text>
            </Box>
            </Link>
            
            </Grid>
            <Text mt="10" align="right" color="#808080">
             [ fabloop.2021 ]
            </Text>
            </Box>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6fa" fill-opacity="0.7" d="M0,64L60,74.7C120,85,240,107,360,122.7C480,139,600,149,720,144C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </footer>

    <style JSX>
    
    </style>
    </>
    );
}
