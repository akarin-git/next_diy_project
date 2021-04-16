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
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)",xl:"repeat(4, 1fr)" }} 
            gap={4}
            w={{base:"100%",md:"80%",lg:"70%",xl:"80%"}}
            m="auto"
            >
            {filteredPosts &&
            filteredPosts.map((post) => <RcCard key={post.id} post={post}/>)}
            </Grid>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e6e6fa" fill-opacity="0.7" d="M0,64L60,74.7C120,85,240,107,360,122.7C480,139,600,149,720,144C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
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