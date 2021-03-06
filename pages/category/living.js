import { getCategoryLiving } from '../../lib/posts';
import { API_ENDPOINT } from "../../constants";
import useSWR from 'swr';
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


import Layout from '../../components/Layout';
import RcCard from '../../components/RcCard';
import Bread from '../../components/Base/Bread';
import CallCard from '../../components/Base/CallCard';

import FormInfoModal from '../../components/Base/FormInfoModal';
import CategoryBtn from '../../components/Base/CategoryBtn';
import TopCatchBar from '../../components/Base/TopCatchBar';
import { HiChevronLeft } from "react-icons/hi";

import { Grid,Box,Flex,Image,Text,Icon,Button,Heading } from "@chakra-ui/react";


// swr
const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${API_ENDPOINT}/api/image/living`;


export default function living({livingPosts}) {
    const {data:posts,mutate} = useSWR(apiUrl,fetcher,{
        initialData:livingPosts,
    });

    useEffect(() => {
        mutate();
    },[]);

    const filteredPosts = posts?.sort(
        (a,b) => new Date(b.created_at) - new Date(a.created_at)
    );

     const category = 'living';

    return (
        <Layout>
        <motion.div initial="exit" animate="enter" exit="exit">
        <Box bg="#E3DBEB" >
            <Bread category={category}/>
            <Heading as="h3" size="xl" align="center" color="#cd853f"> 
                Living
            </Heading>
            <TopCatchBar/>
        </Box>
        <Box mb="40">
            <Grid 
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)",xl:"repeat(4, 1fr)" }} 
            gap={4}
            w={{base:"100%",md:"80%",lg:"80%",xl:"80%"}}
            m="auto"
            mt={10}
            >
            {filteredPosts &&
            filteredPosts.map((post) => <RcCard key={post.id} post={post}/>)}
            </Grid>
        </Box>

            <Button variant="ghost">
                    <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                    <Link href={`/recipe`}>
                    <Text>back</Text>
                    </Link>
            </Button>

          <CallCard/>
        </motion.div>
        </Layout>
    )
}

export async function getStaticProps(){
    // console.log(params);

    const livingPosts = await getCategoryLiving();
    return {
        props:{
            livingPosts,
        },
        revalidate:3,
    };
};