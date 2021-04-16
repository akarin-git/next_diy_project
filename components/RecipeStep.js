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
            <Box padding="5" bg="gray.100" maxW="3xl">

                 {/* 説明１ */}
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
                {post[0].descriptionA}
            </Box>
            </Box>
        {/* 2---------------------------------------- */}
           {post[0].descriptionB ? (
           <Box my="10">
           <Text fontWeight="bold" mb="1">
           2 step
           </Text>
            <Box padding="5" bg="gray.100" maxW="3xl">

                 {/* 説明２ */}
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
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
            <Box padding="5" bg="gray.100" maxW="3xl">

                {/* 説明３ */}
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
            <Box padding="5" bg="gray.100" maxW="3xl">

                 {/* 説明４ */}
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
            <Box padding="5" bg="gray.100" maxW="3xl">
                
                {/* 説明５ */}
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
            <Box padding="5" bg="gray.100" maxW="3xl">

                 {/* 説明６ */}
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
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
