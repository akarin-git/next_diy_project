import { getCategoryCraft } from '../../lib/posts';
import { API_ENDPOINT } from "../../constants";
import useSWR from 'swr';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import RcCard from '../../components/RcCard';
import { Grid,Box } from "@chakra-ui/react";
import Bread from '../../components/Base/Bread';
import CallCard from '../../components/Base/CallCard';
import FormInfoModal from '../../components/Base/FormInfoModal';


// swr
const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${API_ENDPOINT}/api/image/craft`;


export default function handmade({craftPosts}) {
    const {data:posts,mutate} = useSWR(apiUrl,fetcher,{
        initialData:craftPosts,
    });

    useEffect(() => {
        mutate();
    },[]);

    const filteredPosts = posts?.sort(
        (a,b) => new Date(b.created_at) - new Date(a.created_at)
    );
    
        
        const category = 'craft';
        
               

    return (
        <Layout>
         <Box bg="#EED7E3" pb="10">
            <Bread category={category}/>
            <Box align="right" mx="20">
                <FormInfoModal/>
            </Box>
         </Box>
         <Box mb="40">
         <Grid 
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)",xl:"repeat(4, 1fr)" }} 
            gap={4}
            w={{base:"100%",md:"80%",lg:"70%",xl:"80%"}}
            h="auto"
            m="auto"
            mt={10}
            >
            {filteredPosts &&
            filteredPosts.map((post) => <RcCard key={post.id} post={post}/>)}
        </Grid>
        </Box>
         <CallCard/>
        </Layout>
    )
}

export async function getStaticProps(){
    // console.log(params);

    const craftPosts = await getCategoryCraft();
    return {
        props:{
            craftPosts,
        },
        revalidate:3,
    };
};