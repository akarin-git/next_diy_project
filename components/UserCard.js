import Link from 'next/link';
import {
  Flex,
  Box,
  Image,
  chakra,
  useColorModeValue
} from "@chakra-ui/react";

export default function UserCard({post}) {
  // console.log(post[0].user);
    return (
        <>
            <Flex
             bg="gray.600"
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
             >
               <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
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

               <chakra.h2
                    color={useColorModeValue("gray.800", "white")}
                    fontSize={{ base: "xl", md: "2xl" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
               >
                    title
               </chakra.h2>

               <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
                    deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
                    commodi hic, suscipit in a veritatis pariatur minus consequuntur!
               </chakra.p>

               <Flex justifyContent="end" mt={4}>
                    <Link
                      href="#"
                      fontSize="xl"
                      color={useColorModeValue("brand.500", "brand.300")}
                    >
                      {post[0].user.name}
                    </Link>
               </Flex>
             </Box>
             </Link>
            </Flex> 
        </>
    )
}
