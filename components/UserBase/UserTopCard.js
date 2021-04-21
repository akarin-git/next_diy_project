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
                      src="https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,w_418/v1618539579/wed/User_perspective_matte_s_vbu7kn.png"
                    />
               </Flex>

               <chakra.h2
                    color={useColorModeValue("gray.600", "white")}
                    fontSize={{ base: "xl", md: "2xl" }}
                    mt={{ base: 2, md: 2 }}
                    fontWeight="bold"
               >
                   my plofile
               </chakra.h2>
               <Flex justifyContent="end" mt={4}>
                    <Text
                      m={3}
                    >
                    {/* 名前 */}
                      {user[0].name}
                    </Text>
               </Flex>
                <Box>
               <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
                    自分のページ
               </chakra.p>
               
                </Box>
             </Box>
             </Link>
            </Flex>  
        </>
    )
}
