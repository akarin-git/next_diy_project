import { Flex,
         Box, 
         chakra,
        TabPanel,
        Image,
        useColorModeValue
} from "@chakra-ui/react";
import Link from 'next/link';



export default function MypageCard({favoritePost}) {
  console.log(favoritePost.title);
    return (
      <Link href={`/recipe/${favoritePost.id}`}>
      <Box>
      <Box
        w={["80","60"]}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2} h="130">
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="xl"
            textTransform="uppercase"
          >
            {favoritePost.title}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
          {/* {favorite} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </chakra.p>
        </Box>

        <Image
          h={40}
          w="full"
          fit="cover"
          roundedBottom="lg"
          mt={2}
          src={favoritePost.image_path}
          alt=""
        />
      </Box>
        </Box>
      </Link>
    )
}

