import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect } from "react";
import { useAppRouter,useAppAxiosExecute } from "../hooks";
import { motion } from 'framer-motion';
import { imageVariants,reverseVariants } from "../components/Animetion/MotionBase"

import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Spring from '../components/Spring';
import FormInfoModal from '../components/Base/FormInfoModal';
import CardFirst from '../components/TopBase/CardFirst';
import CardSecond from '../components/TopBase/CardSecond';
import TopCallCard from '../components/TopBase/TopCallCard';
import { FcSearch } from "react-icons/fc";

import {
   Box,Flex,Text,Heading,
   InputGroup,Button,
   InputLeftAddon,Image,
   Input,InputLeftElement,
   Grid,chakura,Spacer
} from "@chakra-ui/react";



export default function Home() {

  return (
    <>
      <Head>
        <title>Fab Loop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <motion.div initial="exit" animate="enter" exit="exit">

      <Box bg="#f8f8ff" >
      <Box
        // bg="#f8f8ff"
        pt="10"
        display={["none","none","flex"]}
        alignItems="center"
        justifyContent="space-between"
        w="90%"
      >
      <Box
        w={["","50%","50%"]}
        h="auto"
        pl={["5","10","40","40"]}
      >
       <Box m="auto" w="80%">
      <motion.div variants={imageVariants}>
        <Heading as="h1" size={["xl","xl","3xl"]} color="#3A5478" fontSize="80px" align="left" >
          Try it.
        </Heading>
        <Heading as="h1" size={["xl","xl","3xl"]} color="#3A5478" fontSize="80px" align="left">
         Let's DIY !
        </Heading>
      </motion.div>
        <Box mt="10" align="left">
          <FormInfoModal/>

      <Box mt="20" mr="40">
      <motion.div 
                animate={{ y:15 }}
                transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
            }}>
                 <Image
                    src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619245132/wed/akari_scroll_mgoout.svg"
                    alt="Picture of the author"
                    width={60}
                    height={20}
                />
        </motion.div>
        </Box>

        </Box>
      </Box>
      </Box>
      <Spring />
      </Box>

     
      
      {/* mobile用 */}
      <Box
       display={["block","block","none"]}
       w={["100%","100%"]}
       m="auto"
       bg="#f8f8ff"
      >
      <Box pt="10">
        <Image
          src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619059713/wed/mobiletop_drzjau.png"
          alt="Picture of the author"
          width={["360","400"]}
          height={["280","350"]}
          mt="10"
          m="auto"
        />
      </Box>

      <Box align="center" mt="10" >
       <Heading as="h2" size="2xl" mb="10" color="#3A5478" fontSize="60px">
       Fab Loop
      </Heading>
        <FormInfoModal/>
      </Box>
      </Box>
      

        {/* 説明 */}
        <CardFirst />

        <CardSecond/>
      
        <TopCallCard/>

        </Box>
       
      </motion.div>
      </Layout>

     
       
    </>
  );
}
