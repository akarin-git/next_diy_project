import {
  Container,
  Box,
  Text,
  Flex
} from "@chakra-ui/react";
import Image from 'next/image';


export default function RecipeStep({post}) {
    // data の形　console.log(post[0].descriptionA)
    return (
        <>
           <Container maxW="2xl" my="20">

           <Flex px="3">
            <Image
                width={70} 
                height={70}
                src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,w_247/v1618539711/wed/Success_perspective_matte_s_bc5taa.png'}
            />

                <Text pt={10} px={6}>作り方</Text>
            </Flex>

        {/* 1---------------------------------------- */}
           <Box my="10">
           <Text fontWeight="bold" mb="1">
           1 step
           </Text>

            {/* 説明１ */}
            <Box padding="5" bg="gray.100" maxW="3xl">
                {post[0].descriptionA}
            </Box>
            </Box>
        {/* 2---------------------------------------- */}
           {post[0].descriptionB ? (
           <Box my="10">
           <Text fontWeight="bold" mb="1">
           2 step
           </Text>

            {/* 説明２ */}
            <Box padding="5" bg="gray.100" maxW="3xl">
                {post[0].descriptionB}
            </Box>
            </Box>
           ) : (
                <></>
           )}
        {/* 3---------------------------------------- */}
           {post[0].descriptionC ? (
           <Box my="10">
           <Text fontWeight="bold" mb="1">
           3 step
           </Text>

            {/* 説明３ */}
            <Box padding="5" bg="gray.100" maxW="3xl">
                {post[0].descriptionC}
            </Box>
            </Box>
           ) : (
                <></>
           )}
        {/* 4---------------------------------------- */}
           {post[0].descriptionD ? (
           <Box my="10">
           <Text fontWeight="bold" mb="1">
           4 step
           </Text>
            {/* 説明４ */}
            <Box padding="5" bg="gray.100" maxW="3xl">
                {post[0].descriptionD}
            </Box>
            </Box>
           ) : (
                <></>
           )}
        {/* 5---------------------------------------- */}
           {post[0].descriptionE ? (
           <Box my="10">
           <Text fontWeight="bold" mb="1">
           5 step
           </Text>
            {/* 説明５ */}
            <Box padding="5" bg="gray.100" maxW="3xl">
                {post[0].descriptionE}
            </Box>
            </Box>
           ) : (
                <></>
           )}
        {/* 6---------------------------------------- */}
           {post[0].descriptionF ? (
           <Box my="10">
           <Text fontWeight="bold" mb="1">
           6 step
           </Text>
           
            {/* 説明６ */}
            <Box padding="5" bg="gray.100" maxW="3xl">
                {post[0].descriptionF}
            </Box>
            </Box>
           ) : (
                <></>
           )}
        {/* ---------------------------------------- */}

            </Container> 
        </>
    )
}
