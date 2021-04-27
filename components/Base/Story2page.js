import {
   Box,Flex,Text,
   Spacer,Avatar,Tag,TagLabel
} from "@chakra-ui/react";
import Image from 'next/image';

export default function Story2page() {
    return (
         <>
         {/* 親要素 */}
        <Box w="90%" m="auto" mb="10" bg="#fffacd" p="3" borderRadius="20px">
        
        <Box p={["0","0","5"]}>

        {/* mobile */}
        <Box w="90%" display={["block","none"]} m="auto" my="3" ml="10" align="center">
        <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619507223/wed/story3_ftqyjm.png'}
            width={420}
            height={230}
        />
        </Box>

        {/* PC */}
        <Flex>
        <Box w="60%" display={["none","block"]} align="center" py="5" ml="3">
          <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619507223/wed/story3_ftqyjm.png'}
            width={410}
            height={230}
          />
        </Box>
        <Box mb="5" m="auto">
          <Text mb="3" fontWeight="bold">
           <p>ユーザー登録すると</p>
           <p>自分のDIYの記録と</p>
           <p>気に入ったレシピをkeepできる</p>
          </Text>
        </Box>

        </Flex>
        </Box>
         
        </Box>
        </>
    )
}
