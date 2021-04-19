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
                    mt={{ base: 2, md: 2 }}
                    fontWeight="bold"
               >
                   my plofile
               </chakra.h2>
                <Box>
               <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
                    deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
                    commodi hic, suscipit in a veritatis pariatur minus consequuntur!
               </chakra.p>
               
                </Box>
               <Flex justifyContent="end" mt={4}>
                    <Text
                      m={3}
                    >
                    {/* 名前 */}
                      {me[0].name}
                    </Text>
               </Flex>
             </Box>
             </Link>
            </Flex>     
        </>
    )
}
