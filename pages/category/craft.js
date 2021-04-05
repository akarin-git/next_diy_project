import { getCategoryCraft } from '../../lib/posts';
import { API_ENDPOINT } from "../../constants";
import useSWR from 'swr';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';


// swr
const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${API_ENDPOINT}/api/image/craft`;


export default function handmade({craftPosts}) {
    const {data:posts,mutate} = useSWR(apiUrl,fetcher,{
        initialData:craftPosts,
    });

    const filteredPosts = posts?.sort(
        (a,b) => new Date(b.created_at) - new Date(a.created_at)
    );
    return (
        <Layout>
            {filteredPosts &&
            filteredPosts.map((post) => <Card key={post.id} post={post}/>)}
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