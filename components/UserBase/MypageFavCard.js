import { Flex,
         Box, 
         chakra,
        TabPanel,
        Image,
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
      >
        <Box px={4} py={2} h="130">
         
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
          {/* {favorite} */}
           テストタイトル
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

