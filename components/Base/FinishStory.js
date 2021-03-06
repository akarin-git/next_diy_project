import {
   Box,Flex,Text,
   Spacer,Avatar,Tag,TagLabel
} from "@chakra-ui/react";

import Image from 'next/image';

export default function FinishStory() {
    return (
        <div>
        <Box w="90%" m="auto" mb="10" bg="#fffacd" color="#535354" p="3" borderRadius="20px">
        
        <Box p={["0","0","5"]}>

        {/* mobile */}
        <Box w="90%" display={["block","none"]} m="auto" align="center">
        <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618994555/wed/Saly-12_fnlnk1.png'}
            width={200}
            height={200}
        />
        </Box>

        {/* PC */}
        <Flex>
        <Box mb="5" m="auto">
          <Text mb="3" fontWeight="bold">
           <p>レシピを見つけて</p>
           <p>TRYしてみましょう</p>
          </Text>
        </Box>

        <Box w="50%" display={["none","block"]} align="center" pb="10" ml="20">
          <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618994555/wed/Saly-12_fnlnk1.png'}
            width={300}
            height={280}
          />
        </Box>
        </Flex>
        </Box>
        </Box>
        </div>
    )
}
