import useSWR from 'swr';
import Image from 'next/image';

import { getAllPostsData } from '../../lib/posts';
import { API_ENDPOINT } from "../../constants";
import { useEffect } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import HeadLayout from '../../components/HeadLayout';
import RcCard from '../../components/RcCard';
import Bread from '../../components/Base/Bread';

import { Grid,Box,Flex,Text } from "@chakra-ui/react";


// swr
const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${API_ENDPOINT}/api/image/showall`;


export default function Recipe({recipePosts}) {
// const [router] = useAppRouter();
//    console.log(recipePosts);
    const { data:posts,mutate } = useSWR(apiUrl,fetcher,{
        initialData:recipePosts,
    });
    // console.log(recipePosts);
    const filteredPosts = posts?.sort(
        (a,b) => new Date(b.created_at) - new Date(a.created_at)
    );

    useEffect(() => {
        mutate();
    },[]);

     const category = '';

    return (
        <Layout>
            <Bread />
          
        <Grid 
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)",xl:"repeat(4, 1fr)" }} 
            gap={4}
            w={{base:"100%",md:"80%",lg:"70%",xl:"80%"}}
            m="auto"
            mt={10}
        >
                {filteredPosts &&
                filteredPosts.map((post) => <RcCard key={post.id} post={post}/>)}
            {/* // filteredPosts.map((post) => <Card key={post.id} post={post}/>)} */}
         </Grid> 
        <style JSX>
                {`
                .head{
                    // background:url(https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615208465/background02_xx7sj9.png);
                    // background-repeat: no-repeat;
                    background-color:blue;
                }
                `}
            </style>
        </Layout>
    );
}

export async function getStaticProps(){
    const recipePosts = await getAllPostsData();
    // const recipeCategoryPosts = await getCategoryPostsData();
    return {
        props:{
            recipePosts,
            // recipeCategoryPosts,
        },
        revalidate: 3,
    };
};
