import useSWR from 'swr';
import { getAllPostsData } from '../../lib/posts';
import { API_ENDPOINT } from "../../constants";
import { useEffect } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';


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



    return (
        <Layout>
       

        {filteredPosts &&
        filteredPosts.map((post) => <Card key={post.id} post={post}/>)}
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
