import { getCategoryHandmade } from '../../lib/posts';
import { API_ENDPOINT } from "../../constants";
import useSWR from 'swr';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import RcCard from '../../components/RcCard';
import { Grid } from "@chakra-ui/react";

// swr
const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${API_ENDPOINT}/api/image/handmade`;


export default function handmade({handmadePosts}) {
    const {data:posts,mutate} = useSWR(apiUrl,fetcher,{
        initialData:handmadePosts,
    });

    useEffect(() => {
        mutate();
    },[]);

    const filteredPosts = posts?.sort(
        (a,b) => new Date(b.created_at) - new Date(a.created_at)
    );
    return (
        <Layout>
            <Grid 
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)",xl:"repeat(3, 1fr)" }} 
            gap={3}
            w={{base:"100%",md:"100%",lg:"95%",xl:"80%"}}
            m="auto"
            >
            {filteredPosts &&
            filteredPosts.map((post) => <RcCard key={post.id} post={post}/>)}
            </Grid>
        </Layout>
    )
}

export async function getStaticProps(){
    // console.log(params);

    const handmadePosts = await getCategoryHandmade();
    return {
        props:{
            handmadePosts,
        },
        revalidate:3,
    };
};