import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import Link from 'next/link';

export default function RcCard({post}) {
    return (
        <>
    <Link href={`/recipe/${post.id}`}>
      <Flex
        bg="white"
        p={[1,3,4,4]}
        w="full"
        alignItems="center"
        justifyContent="center"
        >
      <Box
        mx="auto"
        rounded="lg"
        shadow="xl"
        bg="#EEEEEE"
        w={[330,330,290]}
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

        <Box p={4}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Product
            </chakra.span>
            <Text
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize={["2xl","xl","md"]}
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              href="#"
            >
              {post.title}
            </Text>
            <chakra.p
              mt={2}
              fontSize={["sm","sm","xs"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
            {/* {post} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <Text
                  mx={2}
                  fontSize={["md","md","xs"]}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                  href="#"
                >
                {post.user_id}
                  {/* Jone Doe */}
                </Text>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
      </Link>
        </>
    )
}
