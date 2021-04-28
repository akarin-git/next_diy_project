import { Flex,
         Box, 
         chakra,
        TabPanel,
        Image,
        Badge,
        useColorModeValue
} from "@chakra-ui/react";
import Link from 'next/link';



export default function MypageFavCard({favoritePost}) {
  console.log(favoritePost);
    return (
      <Link href={`/recipe/${favoritePost.post_id}`}>
      <Box>
      <Box
        w={["80","60"]}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        _hover={{ mt: 1 ,mb:-1}}
      >
        <Box px={4} py={4} h="130">
         <Flex>
            <Badge  m="2" colorScheme="green">
                   カテゴリー
            </Badge>
             <Badge variant="outline" colorScheme="purple" m="2">EASY</Badge>
             </Flex>
          <chakra.p
            mt={4}
            fontSize="sm"
            fontWeight="bold"
            color={useColorModeValue("gray.600", "gray.400")}
            _hover={{ color: "gray.600", textDecor: "underline" }}
          >
          {/* {favorite} */}
           fav Diy Recipe
          </chakra.p>
        </Box>

        <Image
          h={40}
          w="full"
          fit="cover"
          roundedBottom="lg"
          mt={2}
          src="https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,w_431/v1618906427/xypeb1mlblwzud2em4bj.jpg"
          alt=""
        />
      </Box>
        </Box>
      </Link>
    )
}

