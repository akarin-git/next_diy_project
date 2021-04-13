import Link from 'next/link';
import {
  Flex,
  Box,
  Image,
  chakra,
  useColorModeValue
} from "@chakra-ui/react";

export default function UserTopCard() {
    return (
        <>
            <Flex
             bg="gray.100"
             p={5}
             w="full"
             alignItems="center"
             justifyContent="center"
            >
            <Link href={`/mypage`}>
             <Box
               w={["100%","100%","75%"]}
               mx="auto"
               py={["0","4"]}
               px={["0","8"]}
               bg={useColorModeValue("white", "gray.800")}
               shadow="lg"
               rounded="lg"
             >
               <Flex justifyContent={["center", "end"]} mt={-16}>
                    <Image
                      w={20}
                      h={20}
                      fit="cover"
                      rounded="full"
                      borderStyle="solid"
                      borderWidth={2}
                      borderColor={useColorModeValue("brand.500", "brand.400")}
                      alt="Testimonial avatar"
                      src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                    />
               </Flex>

               <chakra.h2
                    color={useColorModeValue("gray.800", "white")}
                    fontSize={{ base: "xl", md: "2xl" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
               >
                    My Plofile & Web page
               </chakra.h2>
                <Box>
               <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
                    deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
                    commodi hic, suscipit in a veritatis pariatur minus consequuntur!
               </chakra.p>
               <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
                    deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
                    commodi hic, suscipit in a veritatis pariatur minus consequuntur!
               </chakra.p>
                </Box>
               <Flex justifyContent="end" mt={4}>
                    <Link
                      href="#"
                      fontSize="xl"
                      color={useColorModeValue("brand.500", "brand.300")}
                    >
                      Akari Sugi
                    </Link>
               </Flex>
             </Box>
             </Link>
            </Flex>  
        </>
    )
}
