import { getAllPostIds,getPostData } from '../../lib/posts';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_ENDPOINT } from '../../constants';
import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Recipe({staticPost,id}) {
    // console.log(staticPost);
    const router = useRouter();
    // swr
    const { data:post ,mutate } = useSWR(
        `${API_ENDPOINT}/api/image/show/${id}`,
        fetcher,
        {
            initialData:staticPost,
        }
    );

    useEffect(() => {
        mutate();
    },[]);

    if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }
    return (
        <Layout>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.category}</p>
            <Link href={`/category/${post.category}`}>
            <span>hi</span>
            </Link>
        </Layout>
    );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

// ISR
export async function getStaticProps({ params }){
    const {post:staticPost} = await getPostData(params.id);
    console.log(staticPost.id);
    return {
        props:{
            id:staticPost.id,
            staticPost,
        },
        revalidate:3,
    };
}