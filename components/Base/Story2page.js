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
        <Box w="90%" display={["block","none"]} m="auto" my="2" align="center">
        <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619091330/wed/Group_7_nezvln.png'}
            width={190}
            height={190}
        />
        </Box>

        {/* PC */}
        <Flex>
        <Box w="60%" display={["none","block"]} align="center" pb="10">
          <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619091330/wed/Group_7_nezvln.png'}
            width={290}
            height={270}
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
