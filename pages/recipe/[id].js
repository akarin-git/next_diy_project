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
import AvatarBag from "../../components/RecipeBase/Avatar";
import SubTitle from "../../components/RecipeBase/SubTitle";

import { motion } from 'framer-motion';
import { imageVariants } from "../../components/Animetion/MotionBase"
import { HiChevronLeft } from "react-icons/hi";
import { Container,
        Button,
        Icon,
        Text,
        Box,
        Badge,
        Breadcrumb,
        BreadcrumbItem,
        BreadcrumbLink,
 } from "@chakra-ui/react";



const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Recipe({staticPost,id}) {
    // console.log(id);
    const router = useRouter();
    // swr
    const { data:post ,mutate } = useSWR(
        `${API_ENDPOINT}/api/image/show/${id}`,
        fetcher,
        {
            initialData:staticPost,
        }
    );
    // console.log(post);
    useEffect(() => {
        mutate();
    },[]);

    if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }
  
    return (
        <>
        <Layout>
        <motion.div initial="exit" animate="enter" exit="exit">
            {/* ブレッド */}
            <CBread post={post}/>
          
            {/* レシピbox */}
            <Container w={{base:"100%",md:"100%",lg:"80%"}} p="0" my="30">
                {/* タイトル */}
                <RcTitle  post={post}/>
            
         {/* {post[0].title} */}
                {/* 画像 */}
                <Image src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615179182/sample.jpg'} width={640} height={400}/>

                {/* レシピステップ */}
                <RecipeStep/>
                {/* 材料 */}
                {/* <RcTable post={post}/> */}

                <Thx/>
            </Container>

                {/* ユーザー */}
                {/* <UserCard post={post}/> */}

            <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Link href={`/recipe`}>
                <Text>back</Text>
                </Link>
            </Button>
       </motion.div>
        </Layout>
         <style JSX>
        {`
            .container{
                width:100%;
                padding:20px;
                padding-left:30px;
            }
        `}
        </style>
        </>
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
    // console.log(params.id);
    const {post:staticPost} = await getPostData(params.id);
    // console.log(staticPost);
    return {
        props:{
            id:staticPost[0].id,
            staticPost:staticPost,
        },
        revalidate:3,
    };
}