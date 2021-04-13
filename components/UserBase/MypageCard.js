import { Flex, Box, chakra, Image, TabPanel,useColorModeValue } from "@chakra-ui/react";



export default function MypageCard() {
    return (
        <div>
      <Box
        w={["80","60"]}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2} >
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="xl"
            textTransform="uppercase"
          >
            title
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </chakra.p>
        </Box>

        <Image
          h={40}
          w="full"
          fit="cover"
          roundedBottom="lg"
          mt={2}
          src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618278490/pzqsbztrzsg2owg8kkql.jpg"
          alt=""
        />
      </Box>
        </div>
    )
}

