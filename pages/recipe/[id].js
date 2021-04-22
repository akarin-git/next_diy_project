import { getAllPostIds,getPostData } from '../../lib/posts';
import { useRouter } from 'next/router';
import { useAppAxiosExecute } from "../../hooks";

import useSWR from 'swr';
import { API_ENDPOINT } from '../../constants';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../components/Layout';
import UserCard from '../../components/RecipeBase/UserCard';
import RecipeStep from '../../components/RecipeBase/RecipeStep';
import CBread from '../../components/Base/CBread';
import ShereBtn from '../../components/RecipeBase/ShereBtn';
import RcTable from '../../components/RecipeBase/RcTable';
import RcTitle from '../../components/RecipeBase/RcTitle';
import Thx from '../../components/RecipeBase/Thx';
import AvatarBag from "../../components/RecipeBase/Avatar";
import SubTitle from "../../components/RecipeBase/SubTitle";
import IineBtn from "../../components/RecipeBase/IineBtn";
import Step from "../../components/RecipeBase/Step";

import { motion } from 'framer-motion';
import { imageVariants } from "../../components/Animetion/MotionBase"
import { HiChevronLeft } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { FaShareSquare,FaStar } from "react-icons/fa";
import { FcInternal } from "react-icons/fc";

import { Container,
        Button,
        Icon,Flex,
        Text,Spacer,
        Box,
        Badge,
        Breadcrumb,
        BreadcrumbItem,
        BreadcrumbLink,
        Heading,
 } from "@chakra-ui/react";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Recipe({staticPost,id}) {
    // console.log(id);
    const router = useRouter();
    const [{loading,error},iine] = useAppAxiosExecute({
        method:"POST",
        url:"/api/image/favorite",
        errorMessage:"エラー",
    })
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

    const handle = (id) => {
    console.log(id);
    iine({
        post_id:id,
    });
  }

    if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }
  
    // console.log(post[0]);
    return (
        <>
         {/* このようなdataの形　{post[0].title} */}

        <Layout>
            <motion.div initial="exit" animate="enter" exit="exit">
            {/* ブレッド */}
            <CBread post={post}/>
          
                {/* レシピbox */}
                <Container w={{base:"100%",md:"100%",lg:"80%"}} p="0" my="30" mb={20}>

                {/* タイトル */}
                <RcTitle  post={post}/>

                {/* ステップカード */}
                <Step post={post}/>

                {/* 画像 */}
                <Image 
                src={post[0].image_path} 
                width={640} 
                height={400}
                />
                
                {/* レシピステップ */}
                <RecipeStep post={post}/>

                {/* 材料 */}
                <RcTable post={post}/>

                
            </Container>

            <Box w="full" pr={10} mt={10}>
            <Flex>
            <Spacer />
            <Text fontSize="3xl" align="right" mr={14} pb="3">Thx 👋</Text>
             <Box w="50" align="center" mr={3}>
                 <button onClick={handle.bind(this,post[0].id)}>
                    <Icon as={HiHeart} w={8} h={8} color="#dc143c" />
                 </button>
             </Box>
                <ShereBtn post={post}/>
            </Flex>
                

                 <UserCard post={post}/>
            </Box>
           
                <Box 
                 bg="#d8bfd8"
                 py="10"
                >
               
            <Box bgGradient="linear(to-r, #e6e6fa, #ffc0cb)" w="70%" m="auto" my="20" py="10" px="20"　borderRadius="20px">
                <Flex>
                 <Image 
                src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618748941/wed/iamge_phone_lkoofn.png"
                width={350} 
                height={300}
                />
                <Box 
                w="60%"
                h="auto"
                m="auto"
                >
                 <Heading as="h2" size="xl" color="#4682b4">
                    Let's Try it!
                </Heading>
                <Flex mt="10">
                <Text ml="6" color="#696969" mt="2" mr="5">
                login はこちらから 
                </Text>
                 <Button rightIcon={<FcInternal />} colorScheme="teal" variant="outline">
                login
                </Button>
                </Flex>
                
                </Box>
                </Flex>
            </Box>


                {/* 戻るボタン */}
                <Button variant="ghost">
                    <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                    <Link href={`/recipe`}>
                    <Text>back</Text>
                    </Link>
                </Button>
            </Box>

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



                {/* お気に入りボタン
                 <button onClick={handle.bind(this,post[0].id)}>
                   ?
                </button> */}