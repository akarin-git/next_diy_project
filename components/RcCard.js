import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Text,
  Badge
} from "@chakra-ui/react";
import Link from 'next/link';


export default function RcCard({post}) {
  // console.log(post);
    return (
        <>
    <Link href={`/recipe/${post.id}`}>
      <Flex
        m={[1,3,4,4]}
        w="full"
        alignItems="center"
        justifyContent="center"
        >
      <Box
        w={["80","80"]}
        mx="auto"
        rounded="lg"
        shadow="xl"
        bg="#EEEEEE"
        // w={[330,330,290]}
        _hover={{ mt: 1 ,mb:-1}}
      >
        <Image
          roundedTop="lg"
          w="full"
          h={60}
          fit="cover"
          src={post.image_path}
          alt="Article"
        />

        <Box p={2}>
          <Box>
            <Flex>
            <Badge  m="2" colorScheme="green">
                   {post.category}
            </Badge>
             <Badge variant="outline" colorScheme="purple" m="2">{post.difficult}</Badge>
             </Flex>
            <Text
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize={["md","md","sm"]}
              mt={1}
              mx="4"
              _hover={{ color: "gray.600", textDecor: "underline" }}
              href="#"
            >
              {post.title}
            </Text>
            {/* <chakra.p
              mt={2}
              fontSize={["sm","sm","xs"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              
            </chakra.p> */}
          </Box>

          <Box mt={4}>
           
                
              
              {/* <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015
              </chakra.span> */}
           
          </Box>
        </Box>
      </Box>
    </Flex>
      </Link>
        </>
    )
}
