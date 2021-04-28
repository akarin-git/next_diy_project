import { getAllPostIds,getPostData } from '../../lib/posts';
import { useRouter } from 'next/router';
import { useAppAxiosExecute } from "../../hooks";

import useSWR from 'swr';
import { API_ENDPOINT } from '../../constants';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../components/Layout';
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
import { imageVariants,reverseVariants } from "../../components/Animetion/MotionBase";
import { HiChevronLeft } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { FaShareSquare,FaStar } from "react-icons/fa";
import { FcInternal } from "react-icons/fc";
import { FiChevronsDown } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { AiOutlineLaptop,AiOutlineAudit  } from "react-icons/ai"

import { Container,
        Button,
        Icon,Flex,
        Text,Spacer,
        Box,IconButton,
        Badge,Alert,AlertIcon,
        Breadcrumb,
        BreadcrumbItem,
        BreadcrumbLink,
        Heading,useColorModeValue,
        Modal,ModalOverlay,ModalContent,
        ModalHeader,ModalCloseButton,
        ModalBody,ModalFooter,useDisclosure
 } from "@chakra-ui/react";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Recipe({staticPost,id}) {
    
    const router = useRouter();
    const [{loading,error},iine] = useAppAxiosExecute({
        method:"POST",
        url:"/api/image/favorite",
        errorMessage:"未login",
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
    // console.log(id);
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
                <RcTitle
                  post={post}
                />

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

            <Box w={["100%","60%"]} pr="10" mr="10" mt="10" mb="10" m="auto" align="right">
            <Box mb="10" w={["100%","50%"]} >
              <Link href={`/userpage/${post[0].user_id}`}>
               <Button mt={2} ml="10" w="290px" _hover={{ color: '#ff69b4' }} color={useColorModeValue("gray.600", "gray.200")} rightIcon={<AiOutlineAudit />}>
                     {post[0].user.name}'s DIY recipes page
               </Button>
               </Link>

               {post[0].web_page ? (
              <Link href={`${post[0].web_page}`}>
               <Button mt={2} ml="10" w="290px" _hover={{ color: '#ff69b4' }} color={useColorModeValue("gray.600", "gray.200")} rightIcon={<AiOutlineLaptop />} >
                   etc. DIY web site link
               </Button>
               </Link>):(
                   <>
                   </>
               )}
            </Box>
            {/* シェアボタン */}
            <Flex w={["90%","90%","80%"]} mb="8">
            <Spacer />
             <Box w="50" align="center" mr={3}>
                 <button onClick={handle.bind(this,post[0].id)}>
                    <Icon
                     as={FiHeart}
                     w={8}
                     h={8}
                     border="none"
                     color="#a9a9a9"
                     _hover={{ color: 'red' }}
                     />
                 </button>
                   {error && <p className="error">{error}</p>}
                  
             </Box>
                <ShereBtn post={post}/>
            </Flex>
            </Box>
           
                <Box 
                 bg="#d8bfd8"
                 py="10"
                >
                <Box bgGradient="linear(to-r, #e6e6fa, #ffc0cb)" w="70%" m="auto" my="20" py="10" px={["0","10","20"]}　borderRadius="20px">
                <Flex>
                <Box display={["none","block"]}>
                 <Image 
                src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618748941/wed/iamge_phone_lkoofn.png"
                width={350} 
                height={300}
                />
                </Box>
                <Box 
                w={["100%","50%"]}
                h="auto"
                m="auto"
                align="center"
                >
                <motion.div variants={reverseVariants}>
                 <Heading as="h2" size="xl" color="#4682b4">
                    Let's Try it!
                </Heading>
                </motion.div>
                <Link href="/signin">
                 <Button rightIcon={<FcInternal />} colorScheme="teal" variant="outline" size="lg" mt="10" w="150px">
                    login
                </Button>
                </Link>
                
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