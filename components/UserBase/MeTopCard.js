import Link from 'next/link';
import {
  Flex,
  Box,
  Image,
  chakra,
  useColorModeValue,
  Text
} from "@chakra-ui/react";

export default function MeTopCard({me}) {
    // console.log(me);
    return (
        <>
          <Flex
             bg="#d8bfd8"
             p={5}
             mt={8}
             w="full"
             alignItems="center"
             justifyContent="center"
            >
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
                      bg="#fff"
                      fit="cover"
                      rounded="full"
                      borderStyle="solid"
                      borderWidth={2}
                      borderColor={useColorModeValue("brand.500", "brand.400")}
                      alt="Testimonial avatar"
                      src="https://res.cloudinary.com/kiyopikko/image/upload/v1561617116/empty-user-image_o4ll8m.png"
                    />
               </Flex>

               <chakra.h2
                    color={useColorModeValue("gray.600", "white")}
                    fontSize={{ base: "xl", md: "2xl" }}
                    mt={{ base: 2, md: 2 }}
                    ml="10"
                    fontWeight="bold"
               >
                   {me[0].name}
               </chakra.h2>
                <Box>
                      <Image
                          src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619066114/wed/lineyellow_a3awdz.png"
                          width="600"
                          height="30"
                      />
                  </Box>
              
                <Box>
               <chakra.p
                mt={2}
                color={useColorModeValue("gray.600", "gray.200")}
                ml="10"
               >
                     Post Recipe & Favorite Recipe
               </chakra.p>
               
                </Box>
             </Box>
            </Flex>     
        </>
    )
}
