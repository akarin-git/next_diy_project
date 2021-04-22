import Link from 'next/link';
import {
  Flex,
  Box,
  Image,
  chakra,
  useColorModeValue,
  Spacer
} from "@chakra-ui/react";

export default function UserCard({post}) {
  // console.log(post[0].user);
    return (
        <>  
            <Flex
             p={50}
             w="full"
             alignItems="center"
             justifyContent="center"
            >
            <Link href={`/userpage/${post[0].user_id}`}>
             <Box
               w="md"
               mx="auto"
               py={4}
               px={8}
               bg={useColorModeValue("white", "gray.800")}
               shadow="lg"
               rounded="lg"
                _hover={{ mt:1,pb:3 }}
             >
               <Flex
                justifyContent={{ base: "center", md: "end" }}
                 mt={-16} 
                >
                    <Image
                      w={20}
                      h={20}
                      bg="white"
                      fit="cover"
                      rounded="full"
                      borderStyle="solid"
                      borderWidth={2}
                      borderColor={useColorModeValue("brand.500", "brand.400")}
                      alt="Testimonial avatar"
                      src="https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,w_88/v1618453956/User_perspective_matte_gg7mnt.png"
                    />
               </Flex>


               <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
                    user page check
               </chakra.p>
               <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
                    DIY web page
               </chakra.p>

               <Flex justifyContent="end" mt={4}>
                <Spacer/>   
               <chakra.h2
                    color={useColorModeValue("gray.800", "white")}
                    fontSize={{ base: "xl", md: "xl" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
               >
                     {post[0].user.name}
               </chakra.h2>
               </Flex>
             </Box>
             </Link>
            </Flex> 
        </>
    )
}
