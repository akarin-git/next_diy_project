import { getAllPostIds,getPostData } from '../../lib/posts';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_ENDPOINT } from '../../constants';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../components/Layout';
import UserCard from '../../components/UserCard';
import RecipeStep from '../../components/RecipeStep';
import CBread from '../../components/Base/CBread';
import RcTable from '../../components/RecipeBase/RcTable';
import RcTitle from '../../components/RecipeBase/RcTitle';
import Thx from '../../components/RecipeBase/Thx';

import { motion } from 'framer-motion';
import { HiChevronLeft } from "react-icons/hi";
import { Container,Button,Icon,Text } from "@chakra-ui/react";


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
        <motion.div initial="exit" animate="enter" exit="exit">
            {/* ブレッド */}
            <CBread category={post.category}/>

            {/* レシピbox */}
            <Container w={{base:"100%",md:"100%",lg:"80%"}} p="0" my="30">
                {/* タイトル */}
                <RcTitle post={post}/>
                {/* 画像 */}
                <Image src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615179182/sample.jpg'} width={640} height={400}/>

                {/* レシピステップ */}
                <RecipeStep/>
                {/* 材料 */}
                <RcTable post={post}/>

                <Thx/>
            </Container>

                {/* ユーザー */}
                <UserCard post={post}/>

            <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Link href={`/recipe`}>
                <Text>back</Text>
                </Link>
            </Button>
       </motion.div>
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