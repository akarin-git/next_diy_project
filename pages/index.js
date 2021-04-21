import Head from 'next/head';
// import Image from 'next/image';
import { useState } from "react";
import { useAppRouter,useAppAxiosExecute } from "../hooks";

import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Spring from '../components/Spring';
import FormInfoModal from '../components/Base/FormInfoModal';
import TopFeature from '../components/Base/TopFeature';
import {
   Box,Flex,Text,Heading,
   InputGroup,Button,
   InputLeftAddon,Image,
   Input,InputLeftElement
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";




export default function Home() {
 

  return (
    <>
      <Head>
        <title>Fab Loop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Box
        bg="#f8f8ff"
        pt="20"
        display={["none","none","flex"]}
        alignItems="center"
        justifyContent="space-between"
      >
      <Box
        w={["","50%","40%"]}
        h="auto"
        pt={["5","10","20"]}
        pl={["5","10","20","20"]}
      >
      
       <Flex align="center">
        <Text fontSize={["30","30","60","70"]}>
          Try it. Let's DIY 
        </Text>
        
      </Flex>
      <Box my="10" >
       <FormInfoModal/>
      </Box>

      </Box>
      <Spring />
      </Box>

      {/* mobile用 */}
      <Box
       display={["block","block","none"]}
       w={["100%","80%"]}
       m="auto"
      >
       
      <Box m="10">
        <Image
         src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618539570/wed/Tools_perspective_matte_s_lqe2ko.png"
         alt="Picture of the author"
         width={200}
         height={200}
        />
      </Box>

      <Box align="right" m="10" >
       <Heading as="h2" size="2xl" mb="10">
       Fab Loop
      </Heading>
        <FormInfoModal/>
      </Box>

      </Box>

      <Box bg="#f5f5f5" >
      <TopFeature/>
      </Box>


      </Layout>

     
       
    </>
  );
}
