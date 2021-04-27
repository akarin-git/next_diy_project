import Link from 'next/link';
import {
  Flex,
  Box,
  Image,
  chakra,
  useColorModeValue,
  Text
} from "@chakra-ui/react";

export default function UserTopCard({user}) {
  // console.log(user);
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
              align={{base:"center",md:"left"}}
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
                      src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619488317/wed/ava3_bzqxf6.png"
                    />
               </Flex>
              
               <chakra.h2
                    color={useColorModeValue("gray.600", "white")}
                    fontSize={{ base: "xl", md: "xl" }}
                    mt={{ base: 5, md: 6 }}
                    ml={{ base: 4, md: 4 }}
                    fontWeight="bold"
               >
                   {user[0].name} Fab page
               </chakra.h2>
              
                  <Box mt="2">
                      <Image
                          src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619066114/wed/lineyellow_a3awdz.png"
                          width="300"
                          height="10"
                      />
                  </Box>
                <Box>
               <chakra.p mt={2} mb={["10","5"]} color={useColorModeValue("gray.600", "gray.200")}>
                    user Post Recipe & Favorite Recipe
               </chakra.p>
               
                </Box>
             </Box>
             </Link>
            </Flex>  
        </>
    )
}
